const ProjectBoard = require('../models/ProjectBoard')

const getProjectBoard = async (req, res) => {
    const projectId = req.query.projectId;
    try{
        let projectBoard = await ProjectBoard.findOne({"projectId": projectId})
        console.log(projectBoard)
        res.status(200).json(projectBoard)
    } catch(error){
        console.log(error.message)
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
    createProjectBoard,
    getProjectBoard,
    updateProjectBoard
}

