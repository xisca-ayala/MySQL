const {Router} = require("express");
const router = Router();
const studentCtrl = require('../controller/students.controller'); 

router.get("/students?id=5", studentCtrl.getStudent);

router.post("/students", studentCtrl.createStudent);

router.put("/students", studentCtrl.updateStudent);

router.delete("/students", studentCtrl.deleteStudent);

module.exports = router; 