const {Schema,model}=require('mongoose')

module.exports.job = model('Jobs', Schema({
    title: String,
    type: String,
    openings:Number,
    description: String,
    salary: Number,
    webUrl: String,
    deadline: {
        type: Date,
    },
}, { timestamps: true }))
