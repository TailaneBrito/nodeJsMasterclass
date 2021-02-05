const mongoose = require('mongoose');

//validate our inpute
const validator = require('validator');

const jobSchema = new mongoose.Schema({
    title : {
        title : String,
        required : [true, 'Please enter Job Title.'],
        trim : true,
        maxLength : [100, 'Job title cannot exceed 100 characteres.']
    },
    //slug is a ulr
    slug : String,
    description : {
        type : String,
        required : [true, 'Please enter job description'],
        maxLength : [1000, 'Job description cannot exceed 1000 characters.']
    },
    email : {
        type : String,
        validate : [validator.isEmail, 'Please type a valid email address.']
    },
    address : {
        type : String,
        require : [true, 'Please add an address.']
    },
    company : {
        type: String,
        require : [true, 'Please add company name.']
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
        require : true,
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
    Experience : {
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
        default : new Date().SetDate(new Date().getDate() + 7)
    },
    applicantsApplied : {
        type : [Object],
        select : false
    },
});

module.exports = mongoose.model('Job', jobSchema)