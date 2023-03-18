const { job } = require("../models/jobs");

module.exports.addJob = async (req, res) => {
   const newJob = new job(req.body);
   const result = await newJob.save();
   return res.status(201).send(result)
}


module.exports.addJobs = async (req, res) => {
   const jobs = await job.find({})
   return res.status(200).send(jobs)
}

