require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const DocRoutes =require('./routes/docRoutes')
//express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/airost/doc',DocRoutes)

//connect to mongodb
mongoose.connect(process.env.MONG_URI)
  .then(()=>{
    app.listen(process.env.PORT,(req,res)=>{
      console.log('Connected to db & listening for requests on port 4000!!!')
    })
  })
  .catch((err)=>{
    console.log(err)
  })




