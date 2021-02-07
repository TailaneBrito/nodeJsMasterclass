const express = require('express');
const router = express.Router();

//import jobs controller methods
const { 
    getJobs, 
    newJob,
    getJobsInRadius,
    updateJob,
    deleJob

} = require('../controllers/jobsController');

//route that will get the 
router.route('/jobs').get(getJobs);
router.route('/jobs/:zipcode/:distance').get(getJobsInRadius)

//send data to the database
router.route('/job/new').post(newJob);

router.route('/job/:id')
    .put(updateJob)
    .delete(deleJob);

module.exports = router;