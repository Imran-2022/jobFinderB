const router = require('express').Router();
const { addJob,addJobs,deleteJob,getJob } = require('../controllers/jobsControllers');

router.route('/')
    .post(addJob)
    .get(addJobs)
    .delete(deleteJob)

router.route('/:id')
    .delete(deleteJob)
    .get(getJob)

module.exports = router;
