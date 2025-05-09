const mongoose = require('mongoose')
const Schema = mongoose.Schema

const docSchema = new Schema({
  image:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  profile:{
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  date:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  },
},{timestamps: true})

module.exports = mongoose.model('Doc', docSchema)
