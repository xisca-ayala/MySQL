const {Router} = require("express");
const router = Router();
const subjectsCtrl = require('../controller/subjects.controller'); 

router.get("/mean/:id", subjectsCtrl.getMean);

router.get("/studied/:id", subjectsCtrl.getStudiedStudent);

router.get("/studied", subjectsCtrl.getStudiedStudents);

router.get("/taught/:id", subjectsCtrl.getTaughtTeacher);

router.get("/taught", subjectsCtrl.getTaughtTeachers); 



module.exports = router; 