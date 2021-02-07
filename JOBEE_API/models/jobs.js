const mongoose = require('mongoose');
const validator = require('validator');
const slugify = require('slugify');
const geoCoder = require('../utils/geocoder');

const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Please give the job a title'],
        trim : true,
        maxlength : [100, 'Job title cannot exceed 100 characteres.']
    },
    //slug is a ulr
    slug : String,
    description : {
        type : String,
        required : [true, 'Please enter job description'],
        maxlength : [1000, 'Job description cannot exceed 1000 characters.']
    },
    email : {
        type : String,
        validate : [validator.isEmail, 'Please type a valid email address.']
    },
    address : {
        type : String,
        required : [true, 'Please add an address.']
    },
    location :{
        type : {
            type : String,
            enum : ['Point']
        },
        coordinates : {
            type : [Number],
            index : '2dsphere'
        },
        formattedAddress : String,
        city : String,
        state : String,
        zipcode : String,
        country : String
    },
    company : {
        type: String,
        required : [true, 'Please add company name.']
    },
    industry : {
        //array of strings
        type : [String],
        required : true,
        enum : {
            values : [
                'Business',
                'Information Technology',
                'Banking',
                'Education/Training',
                'Telecommunication',
                'Others'
            ],
            message : 'Please select correct options for industry.'
        }
    },
    jobType : {
        type : String,
        required : true,
        enum : {
            values : [
                'Full-Time',
                'Part-Time',
                'Interns'
            ],
            message : 'Please select correct option for job type.'
        }
    },
    minEducation : {
        type : String,
        required : true,
        enum : {
            values : [
                'Bachelors',
                'Masters',
                'Phd'
            ],
            message : 'Please select correct options for education.'
        }
    },
    positions : {
        type : Number,
        default : 1
    },
    experience : {
        type : String, 
        required : true,
        enum : {
            values : [
                'No Experience',
                '1 - 2 years',
                '2 - 5 years',
                '5 years +'
            ],
            message : 'Select option for experience.'
        }
    },
    salary : {
        type : Number, 
        required : [true, 'Please enter expected salary']
    },
    postingDate : {
        type : Date,
        default : Date.now
    },
    lastDate : {
        type : Date, 
        default : new Date().setDate(new Date().getDate() + 7)
    },
    applicantsApplied : {
        type : [Object],
        select : false
    }
});

//creating job slug before saving
jobSchema.pre('save', function(next){
    //creating slug before saving to db
    this.slug = slugify(this.title, {lower : true});

    next();
});

//settingup location
jobSchema.pre('save', async function(next){
    const loc = await geoCoder.geocode(this.address);

    this.location = {
        type : 'Point',
        coordinates : [loc[0].longitude, loc[0].latitude],
        formattedAddress : loc[0].formattedAddress,
        city : loc[0].city,
        state : loc[0].stateCode,
        zipcode : loc[0].zipcode,
        country : loc[0].countryCode
    }
});


module.exports = mongoose.model('Job', jobSchema);