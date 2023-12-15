const express = require('express');
const { createVerifiedUser } = require('../controller/adminController');
const router = express.Router();

//POST a new Doc
router.post('/users/verified', createVerifiedUser);


module.exports = router;