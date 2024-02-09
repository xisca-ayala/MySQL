const {pool} = require("../database");

const getStudent = async (req, res)=> {
    try{
        let sql;
        if (req.params.id == null){
            sql = "SELECT * FROM students";
        }else{
            sql = "SELECT * FROM students WHERE student_id = " + req.params.id;
        }
        let [result] = await pool.query(sql);
        res.send(result);
    }catch(err){
        console.log(err);
    }
}

const getStudents = async (req, res)=> {
    try{
        let sql = "SELECT * FROM students";
        let [result] = await pool.query(sql);
        res.send(result);
    }catch(err){
        console.error(err);
    }
}

const createStudent = async (req, res) => {
    try{
        let sql = "INSERT INTO students (first_name, last_name, group_id, start_date)" +
        "VALUES ('" + req.body.first_name + "', '" +
        req.body.last_name + "', '" +
        req.body.group_id + "','" +
        req.body.start_date +"')";
        let[result] = await pool.query(sql);
        res.send(result);
    }catch(err){
        console.error(err);
    }
}

const updateStudent = async (req, res) => {
    try{
        let params = [req.body.first_name,
                    req.body.last_name,
                    req.body.group_id, 
                    req.body.start_date]
        let sql = "UPDATE students SET first_name = COALESCE(?, first_name), " +
        "last_name = COALESCE (?, last_name), " +
        "group_id = COALESCE(?, group_id), " +
        "start_date = COALESCE(?, start_date) "; 
        let[result] = await pool.query(sql, params);
        res.send(result);
    }catch (err){
        console.error(err);
    }
}

const deleteStudent = async (req, res) => {
    try{
        let sql = sql = "DELETE FROM students WHERE student_id = " + req.params.id;
        let[result] = await pool.query(sql, params);
        res.send(result);
    }catch(err){
        console.error(err);
    }
}


module.exports = {
    getStudent,
    getStudents, 
    createStudent,
    updateStudent,
    deleteStudent
};