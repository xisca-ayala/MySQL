const {Router} = require("express");
const router = Router();
const studentCtrl = require("../controller/students.controller.js"); 

router.get("/students/:id", studentCtrl.getStudent);

router.get("/students", studentCtrl.getStudents)

router.post("/students", studentCtrl.createStudent);

router.put("/students", studentCtrl.updateStudent);

router.delete("/students", studentCtrl.deleteStudent);

module.exports = router; 