//have all the methods for the routes. that will be the jobs here
const Job = require('../models/jobs');

//Get all jobs => / api/v1/jobs
//going to exports the method to be used somewhere else.
exports.getJobs = (req, res, next) => {
    res.status(200).json({
        success : true,
        middlewareUser : req.user,
        requestMethod : req.method,
        url : req.url,
        message : 'This route will display jobs in the future'
    });
}

//create a new job => /api/v1/job/new
exports.newJob = (req, res, next) => {
    const job = Job.create(req.body);

    res.status(200).json({
        success : true,
        message : 'Job created successfully',
        data : job
    })
}