const mongoose = require('mongoose'); 

const projectBoard = new mongoose.Schema({
    projectId:{
        type:Number,
        required:true,
     },
    tasks:[
            new mongoose.Schema({
                title: String,
                column: String,
                assignee: String,
                createdBy: String,
                description: String,
                priority: String,
                dueDate: Date,
            })
        ]
});

module.exports = mongoose.model('ProjectBoard', projectBoard);