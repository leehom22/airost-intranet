const Doc = require('../models/docModel')
const mongoose = require('mongoose')

//get all Docs
const getDocs = async (req, res) => {
  const Docs = await Doc.find({}).sort({createdAt: -1})

  res.status(200).json(Docs)
}


//get a single Doc
const getDoc = async (req, res) => {
  const {id}= req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).json({error: 'No Doc'})

  const DOC = await Doc.findById(id);

  if(!DOC) {
    return res.status(404).json({error: 'Not found'})
  }

  res.status(200).json(DOC)
}

//create new Doc
const createDoc = async (req, res) => {
  const {image,title,profile,author,date,type,description,content} = req.body;

  let emptyFields =[]

  if(!image){
    emptyFields.push('image')
  }
  if(!title){
    emptyFields.push('title')
  }
  if(!profile){
    emptyFields.push('profile')
  }
  if(!author){
    emptyFields.push('author')
  }
  if(!date){
    emptyFields.push('date')
  }
  if(!type){
    emptyFields.push('type')
  }
  if(!description){
    emptyFields.push('description')
  }
  if(!content){
    emptyFields.push('content')
  }
  if(emptyFields.length>0){
    return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
  }

  //add doc to db
  try{
    const DOC= await Doc.create({image,title,profile,author,date,type,description,content});
    res.status(200).json(DOC)
  }catch(error){
    res.status(400).json({error:error.message})
  }
}


//delete a Doc
const deleteDoc = async (req, res) => {
  const {id}= req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).json({error: 'No Doc'})

  const Doc = await Doc.findOneAndDelete({_id: id});

  if(!Doc) 
    return res.status(404).json({error: 'Not found'})
  
  res.status(200).json({message: 'Doc deleted'})

}

//update a Doc
const updateDoc = async (req, res) => {
  const {id}= req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).json({error: 'No Doc'})

  const Doc =  await Doc.findByIdAndUpdate({_id:id},{
    ...req.body
  })

  if(!Doc) 
    return res.status(404).json({error: 'Not found'})
  
  res.status(200).json(Doc)

}

module.exports = {
  getDocs,
  getDoc,
  createDoc,
  deleteDoc,
  updateDoc
}