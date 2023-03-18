const router = require('express').Router();
const { addJob,addJobs,deleteJob } = require('../controllers/jobsControllers');

router.route('/')
    .post(addJob)
    .get(addJobs)
    .delete(deleteJob)

router.route('/:id')
    .delete(deleteJob)

module.exports = router;
