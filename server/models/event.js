const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
      Subject:{
        type: String,
        required: true
      },
      startTime:{
        type: Date,
        required: true
      },
      endTime:{
        type: Date,
        required: true
      },

},{timestamps: true})


module.exports = mongoose.model('Event', eventSchema)


