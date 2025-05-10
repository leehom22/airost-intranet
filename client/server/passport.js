const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport")
const dotenv = require('dotenv')
const User = require('./models/User')
const VerifiedUser = require('./models/VerifiedUser')
const mongoose = require('mongoose')

dotenv.config()

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile,cb) {
    try{
      
      let user = await User.findOne({googleID: profile.id})
      if(user){
        cb(null, user)
      }else{
        const verifiedUser= await VerifiedUser.findOne({email:profile.emails[0].value});
        let userPosition; 

        if (verifiedUser){
          userPosition = verifiedUser.position[0];
        }
        else{
          userPosition = " ";
        }

        const newUser = new User({
          googleID: profile.id,
          name : profile.displayName,
          email: profile.emails[0].value,
          photo : profile.photos[0].value,
          position : userPosition,
          description : "no description added yet...",
        })
        user = await User.create(newUser)
        cb(null, user)
      }
    }catch(err){
      console.log(err)
    }
  }
));

passport.serializeUser((user,cb)=>{
  cb(null,user)
})

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});
