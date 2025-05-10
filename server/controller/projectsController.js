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
        const projectId = await Project.countDocuments();
        const lastProject = await Project.findOne({}, {}, { sort: { 'createdAt' : -1 } })
        console.log(lastProject.projectId)
        const newProject = {
            projectId: lastProject.projectId + 1,
            ...req.body,
        };
        const savedNewProject = await Project.create(newProject)
        res.status(200).json(savedNewProject)
        const newProjectBoard = await ProjectBoard.create(newProject)
    } catch(error){
        console.log(error.message)
    }
}

const getProjectBoard = async (req, res) => {
    const projectId = req.params.uid;
    if (!isNaN(projectId)){
        try{
            let projectBoard = await ProjectBoard.findOne({"projectId": projectId})
            const tasks=projectBoard
            
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
    // if projectId(docuemnt) is not available in the db, then create a new document
    try{
        const existingBoard=await ProjectBoard.findOne({projectId:req.body.projectId})
        if(!existingBoard){
            const newProjectBoard = await ProjectBoard.create(req.body)
            res.status(201).json(newProjectBoard)
            console.log("Created new project board")
        }else{
            // If the board already exists, update the existing project board with the new tasks
            existingBoard.tasks = req.body.tasks
            await existingBoard.save()
            res.status(200).json(existingBoard)
            console.log(`Creating tasks...Project board with id ${existingBoard.projectId} already exists, tasks updated.`);
        }
    } catch(error){
        console.log("Error creating/updating project board: ", error.message);
        res.status(400).json(error.message);
    }
}

const refreshProjectBoard = async (req, res) => {//from client

    try{
        const updatedProjectBoard = await ProjectBoard.findOneAndUpdate({projectId: req.body.projectId},{$set:{tasks: req.body.tasks}})
        res.status(200).json(updatedProjectBoard)
    }catch{error => console.log(error.message)}
}

const updateProjectBoard = async (req, res) => {

    try{
        const updatedProjectBoard = await ProjectBoard.findOneAndUpdate(
            {projectId: req.body.projectId,
                "tasks.task_id": req.body.tasks.task_id,
            },
            {$set:
                {"tasks.$": req.body.tasks}
            },
            {new:true}
        )
        console.log("Updating project...update successfully at document ",req.body.projectId,"at ",req.body.tasks)
        res.status(200).json(updatedProjectBoard)

    }catch{error => console.log(error.message)}
}
module.exports = {
    getProjects,
    createProject,
    getProjectBoard,
    createProjectBoard,
    updateProjectBoard,
    refreshProjectBoard
}

