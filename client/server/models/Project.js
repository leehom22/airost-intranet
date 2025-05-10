const mongoose = require('mongoose'); 

const project = new mongoose.Schema({
    projectId:{
        type:Number,
        required:true,
     },
    title: String,
    description: String,
    lead: String,
},{timestamps: true});

module.exports = mongoose.model('Project', project);