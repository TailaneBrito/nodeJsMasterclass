const express = require('express');
const router = express.Router();

//import jobs controller methods
const { 
    getJobs, 
    newJob,
    getJobsInRadius

} = require('../controllers/jobsController');

//route that will get the 
router.route('/jobs').get(getJobs);
router.route('/jobs/:zipcode/:distance').get(getJobsInRadius)

//send data to the database
router.route('/job/new').post(newJob);

module.exports = router;