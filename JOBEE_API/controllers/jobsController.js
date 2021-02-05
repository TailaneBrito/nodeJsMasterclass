//have all the methods for the routes. that will be the jobs here

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