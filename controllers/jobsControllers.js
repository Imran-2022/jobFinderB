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
module.exports.getJob = async (req, res) => {
   const editId=req.params.id;
   const singleJob = await job.findOne({_id:editId})
   return res.status(200).send(singleJob)
}

module.exports.deleteJob = async (req, res) => {

   const _id = req.params.id;
   const result = await job.deleteOne({ _id });
   const dt = await job.find({})
   return res.status(200).send({ message: "deleted !" })
   
}

