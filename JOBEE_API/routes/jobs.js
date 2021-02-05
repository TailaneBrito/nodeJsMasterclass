const express = require('express');
const router = express.Router();

//import jobs controller methods
const { getJobs } = require('../controllers/jobsController');

//route that will get the 
router.route('/jobs').get(getJobs);

module.exports = router;