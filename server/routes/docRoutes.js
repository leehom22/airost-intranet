const express = require('express');
const { createDoc,getDoc,getDocs,deleteDoc,updateDoc } = require('../controller/docController');
const router = express.Router();

//GET all Docs
router.get('/', getDocs);

//GET a single Doc
router.get('/:id', getDoc);

//POST a new Doc
router.post('/', createDoc);

//DELETE a Doc
router.delete('/:id', deleteDoc);

//UPDATE a Doc
router.patch('/:id', updateDoc);


module.exports = router;