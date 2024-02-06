const {pool} = require("../database");

const getMean = async (req, res)=> {
    try{
        let sql;
        if (req.params.id == null){
            sql = "SELECT AVG (mark) FROM markss";
        }else{
            sql = "SELECT AVG (mark) FROM markss WHERE subjects_id = " + req.params.id;
        }
    let [result] = await pool.query(sql);

    res.send(result);
    }
    catch(err){
        console.error(err);
    }
}


const getStudiedStudent = async (req, res)=> {
    try{
        let sql;
        if (req.params.id == null){
            sql = "SELECT * FROM subjects";
        }else{
            sql = "SELECT DISTINCT title FROM subjects "  +
            "INNER JOIN markss ON subjects.subject_id = markss.subjects_id " + 
            "INNER JOIN students ON markss.student_id = students.student_id " +
            "WHERE students.student_id = " + req.params.id; 
        }
    let [result] = await pool.query(sql);

    res.send(result);
    }
    catch(err){
        console.log(err);
    }
}

const getStudiedStudents = async (req, res)=> {
    try{
        let sql = "SELECT students.first_name, students.last_name, subjects.title FROM subjects " +
            "INNER JOIN markss ON subjects.subject_id = markss.subjects_id " + 
            "INNER JOIN students ON markss.students_id = students.student_id ";
        
        let [result] = await pool.query(sql);

        res.send(result);
    }catch(err){
        console.log(err);
    }
}

const getTaughtTeacher = async (req, res)=> {
    try{
        let sql;
        if (req.params.id == null){
            sql = "SELECT * FROM teachers";
        }else{
            sql = "SELECT teachers.first_name, teachers.second_name, subjects.title FROM subjects " +
            "INNER JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id " + 
            "INNER JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id "+
            "WHERE teachers.teacher_id = " + req.params.id; 
        }
        let [result] = await pool.query(sql);

        res.send(result);
    }catch(err){
        console.log(err);
    }
}

const getTaughtTeachers = async (req, res)=> {
    try{
        let sql = "SELECT DISTINCT teachers.first_name, teachers.second_name, subjects.title FROM subjects " +
            "INNER JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id " + 
            "INNER JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id ";
    
        let [result] = await pool.query(sql);

        res.send(result);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getMean,
    getStudiedStudent,
    getStudiedStudents,
    getTaughtTeacher,
    getTaughtTeachers
}
