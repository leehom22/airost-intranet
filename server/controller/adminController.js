const VerifiedUser = require('../models/VerifiedUser');
const User = require('../models/User');

const getUsers = async (req, res) => {
    var verifiedUsers = await VerifiedUser.find();
    console.log(verifiedUsers)

    var users = await User.find();
    console.log(users)
}

const createVerifiedUser = async (req, res) => {
    const newVerifiedUser = new VerifiedUser({
        name : req.body.name,
        email : req.body.email,
        position : req.body.position,
    })

    try {
        const existingUser = await VerifiedUser.findOne({email : newVerifiedUser.email});

        if (existingUser){
            res.json({createStatus : "exist"})
        }
        else {
            await newVerifiedUser.save();
            res.status(201).json({createStatus : "success"});
        }
    } 
    catch(err){
        console.log(err)
    }
}

module.exports = {
    createVerifiedUser,
    getUsers
}

