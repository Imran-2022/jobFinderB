const router = require('express').Router();
const { addJob } = require('../controllers/jobsControllers');

router.route('/')
    .post(addJob)

module.exports = router;
