const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    googleID:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:false,
     },
    name:{
        type:String,
        required:true,
     },
    photo:{
        type:String,
        required:true,
     },
    position:{
        type:Array,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('User', userSchema);