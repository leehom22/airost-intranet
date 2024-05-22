const mongoose = require('mongoose'); 

const project = new mongoose.Schema({
    projectId:{
        type:Number,
        required:true,
     },
    title: String,
});

module.exports = mongoose.model('Project', project);