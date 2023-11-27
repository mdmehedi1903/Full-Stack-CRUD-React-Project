const express = require('express');
const router = express.Router();

const StudentController = require('../controller/studentController') 

// CRUD-Student
router.post('/CreateStudent', StudentController.CreateStudent)
router.post('/UpdateStudent/:id', StudentController.UpdateStudent)
router.get('/ReadStudent', StudentController.ReadStudent)
router.get('/ReadStudentByID/:id', StudentController.ReadStudentByID)
router.delete('/DeleteStudent/:id', StudentController.DeleteStudent)


module.exports = router;  
 








