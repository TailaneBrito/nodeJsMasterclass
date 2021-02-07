const express = require('express');
const router = express.Router();

//import jobs controller methods
const { 
    getJobs, 
    newJob,
    getJobsInRadius,
    updateJob,
    deleJob,
    getJob

} = require('../controllers/jobsController');


router.route('/jobs').get(getJobs);
router.route('/job/:id/:slug').get(getJob);
router.route('/jobs/:zipcode/:distance').get(getJobsInRadius)


router.route('/job/new').post(newJob);

router.route('/job/:id')
    .put(updateJob)
    .delete(deleJob);

module.exports = router;