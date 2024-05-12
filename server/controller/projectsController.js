const ProjectBoard = require('../models/ProjectBoard')
const Project = require('../models/Project')

const getProjects = async (req, res) => {
    try{
        let projects = await Project.find()
        res.status(200).json(projects)
    } catch(error){
        console.log(error.message)
    }
}

const createProject = async (req, res) => {
    try{
        const newProject = await Project.create(req.body)
        res.status(200).json(newProject)
        const newProjectBoard = await ProjectBoard.create(req.body)
    } catch(error){
        console.log(error.message)
    }
}

const getProjectBoard = async (req, res) => {
    const projectId = req.params.uid;
    if (!isNaN(projectId)){
        try{
            let projectBoard = await ProjectBoard.findOne({"projectId": projectId})
            res.status(200).json(projectBoard)
        } catch(error){
            console.log(error.message)
        }
    }
    else{
        console.log(`projectId: ${projectId} is not a number`)
    }
}

const createProjectBoard = async (req, res) => {
    try{
        const newProjectBoard = await ProjectBoard.create(req.body)
        res.status(200).json(newProjectBoard)
    } catch(error){
        console.log(error.message)
    }
}

const updateProjectBoard = async (req, res) => {
    console.log(req.body)
    try{
        const updatedProjectBoard = await ProjectBoard.findOneAndUpdate({projectId: req.body.projectId},{$set:{tasks: req.body.tasks}})
        res.status(200).json(updatedProjectBoard)
    }catch{error => console.log(error.message)}
}
module.exports = {
    getProjects,
    createProject,
    getProjectBoard,
    createProjectBoard,
    updateProjectBoard
}

