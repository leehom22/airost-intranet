const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport")
const dotenv = require('dotenv')
const User = require('./models/User')

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
        const newUser = new User({
          googleID: profile.id,
          name : profile.displayName,
          email: profile.emails[0].value,
          photo : profile.photos[0].value,
          position : "member",
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
