const express = require('express');
const router = express.Router();

//import jobs controller methods
const { 
    getJobs, 
    newJob

} = require('../controllers/jobsController');

//route that will get the 
router.route('/jobs').get(getJobs);

//send data to the database
router.route('/job/new').post(newJob);

module.exports = router;