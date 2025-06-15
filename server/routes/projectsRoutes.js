const express = require('express');
const { getProjects, createProject, deleteProject, getProjectBoard, createProjectBoard, updateProjectBoard, refreshProjectBoard } = require('../controller/projectsController');
const router = express.Router();

// Get all users
router.get('/tracking/:uid', getProjectBoard);
// router.post('/tracking', getUsers);
router.post('/tracking', createProjectBoard);

router.put('/tracking', refreshProjectBoard);

router.put('/update', updateProjectBoard);

router.get('/', getProjects);

router.post('/', createProject);

router.delete('/:id', deleteProject);

module.exports = router;