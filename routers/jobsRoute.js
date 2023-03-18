const router = require('express').Router();
const { addJob,addJobs,deleteJob,getJob,editJob } = require('../controllers/jobsControllers');

router.route('/')
    .post(addJob)
    .get(addJobs)
    .delete(deleteJob)

router.route('/:id')
    .delete(deleteJob)
    .get(getJob)
    .put(editJob)

module.exports = router;
