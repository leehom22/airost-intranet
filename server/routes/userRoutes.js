const express = require('express');
const { updateUser } = require('../controller/userController');
const router = express.Router();

//UPDATE a User
router.patch('/:id', updateUser);

module.exports = router;