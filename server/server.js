const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./passport")
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth");
const session = require('express-session')
const mongoose = require('mongoose')
const DocRoutes =require('./routes/docRoutes')
require('dotenv').config()

// Connect to db
const connectDatabase = async () => {
    try {
      
      await mongoose.connect(process.env.MONGO_URI);
  
      console.log("connected to database");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
connectDatabase();

app.use(cookieSession({
    name:"session",
    keys:["key1","key2"],
    maxAge: 24 * 60 * 60 * 100,
}))

app.use(passport.authenticate('session'))

app.use(passport.initialize())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}))

app.use("/auth", authRoutes)

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/airost/doc',DocRoutes)

app.listen("4000",()=>{
    console.log("connected to server")
})