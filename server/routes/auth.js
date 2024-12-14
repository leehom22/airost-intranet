const router = require("express").Router();
const passport = require("passport")

require('dotenv').config()

router.get('/login/success',(req, res)=>{
    console.log(req.user)
    console.log(req.isAuthenticated())
    if(req.user){
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
        })
    }
})

router.get('/login/failed',(req, res)=>{
    res.status(401).json({
        success: false,
        message: "failure",
    })
})

router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect(process.env.REACT_APP_URL + "/login")
})

router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/callback', 
  passport.authenticate('google', {
    successRedirect: process.env.REACT_APP_URL ,
    failureRedirect: '/login' 
}));

module.exports = router