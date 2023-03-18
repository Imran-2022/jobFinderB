const router = require('express').Router();
const { addJob,addJobs } = require('../controllers/jobsControllers');

router.route('/')
    .post(addJob)
    .get(addJobs)

module.exports = router;
