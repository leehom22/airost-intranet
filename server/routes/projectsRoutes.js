const express = require('express');
const { getProjectBoard, createProjectBoard, updateProjectBoard } = require('../controller/projectsController');
const router = express.Router();

// Get all users
router.get('/tracking', getProjectBoard);
// router.post('/tracking', getUsers);
router.post('/tracking', createProjectBoard);

router.put('/tracking', updateProjectBoard);
module.exports = router;