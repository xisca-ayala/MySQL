const mysql = require("mysql2/promise");

async function main(){
    try{
        let connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Xismaygi86!",
            database: "centroEstudios"
        });
        console.log("Conexion correcta")
//RETO1:
//1.añadir columna a tabla direction:

        // let sql = "ALTER TABLE direction ADD País VARCHAR(40) AFTER Municipio "; 
        // let [result] = await connection.query(sql);
        // console.log("Columna Creada");
        // console.log(result);

//2.eliminar columna a tabla direction: 
        // let sql = "ALTER TABLE direction DROP País"; 
        // let [result] = await connection.query(sql);
        // console.log("Columna Borrada");
        // console.log(result);

//3.eliminar permanentemente tabla direccion:
        // let sql = "DROP TABLE direction"; 
        // let [result] = await connection.query(sql);
        // console.log("tabla borrada");
        // console.log(result);

//4.setear notas de alumnos a 0: 
        // let sql = "UPDATE marks SET mark=0"; 
        // let [result] = await connection.query(sql);
        // console.log("notas modificadas");
        // console.log(result);

//5.obtener nombre y primer apellido estudiantes:
        // let sql = "SELECT first_name, last_name FROM students"; 
        // let [result] = await connection.query(sql);
        // console.log("Datos obtenidos");
        // console.log(result);

//6.obtener datos de profes
        // let sql = "SELECT * FROM teachers"; 
        // let [result] = await connection.query(sql);
        // console.log("Datos obtenidos");
        // console.log(result);

//RETO2: 
//ELiminar notas con fecha de mas de 10 años:
        // let sql = "DELETE FROM marks WHERE date<'2013-01-30'"; 
        // let [result] = await connection.query(sql);
        // console.log("datos borrados");
        // console.log(result);

//Notas menores de 5 a 5:
        // let sql = "UPDATE marks SET mark=5 WHERE mark<5"; 
        // let [result] = await connection.query(sql);
        // console.log("datos modificados");
        // console.log(result);

//RETO1 5.2:

        // let sql = "SELECT AVG (mark) FROM markss WHERE subjects_id = 1 "; 
        // let [result] = await connection.query(sql);
        // console.log("datos recogidos");
        // console.log(result);

        // let sql = "SELECT COUNT(*) FROM students"; 
        // let [result] = await connection.query(sql);
        // console.log("datos recogidos");
        // console.log(result);

        // let sql = "SELECT * FROM centroEstudios.groups "; 
        // let [result] = await connection.query(sql);
        // console.log("datos recogidos");
        // console.log(result);
        
        // let sql = "DELETE FROM markss WHERE mark > 5 AND (date > '2022-12-31' OR date <'2024-01-01')"; 
        // let [result] = await connection.query(sql);
        // console.log("datos borrados");
        // console.log(result);

        // let sql = " SELECT * FROM students WHERE start_date > '2023-12-31' "; 
        // let [result] = await connection.query(sql);
        // console.log("datos recogidos");
        // console.log(result);

        // let sql = " SELECT subject_id, COUNT(*) AS num_teachers FROM subject_teacher  GROUP BY subject_id"; 
        // let [result] = await connection.query(sql);
        // console.log("datos recogidos");
        // console.log(result);



//RETO2 5.2:

        // let sql = "SELECT students_id, mark FROM markss WHERE students_id BETWEEN 1 AND 20OR (mark > 8 AND date BETWEEN '2022-12-31' AND '2024-01-01');  "; 
        // let [result] = await connection.query(sql);
        // console.log("datos recogidos");
        // console.log(result);

        // let sql = "SELECT subjects_id, AVG (mark) AS media FROM markss WHERE date > '2023-01-31'GROUP BY subjects_id "; 
        // let [result] = await connection.query(sql);
        // console.log("datos recogidos");
        // console.log(result);

        // let sql = "SELECT students_id, AVG (mark) AS media FROM markss WHERE date > '2023-01-31'GROUP BY students_id "; 
        // let [result] = await connection.query(sql);
        // console.log("datos recogidos");
        // console.log(result);

//RETO 3:
        // let sql = "SELECT students.first_name, students.last_name, subjects.title FROM students " +
        // " INNER JOIN markss ON students.student_id = markss.students_id " +
        // " INNER JOIN subjects ON markss.subjects_id = subjects.subject_id "; 
        // let [result] = await connection.query(sql);
        // console.log("datos recogidos");
        // console.log(result);

        // let sql = "SELECT teachers.first_name, teachers.second_name, subjects.title " +
        // " FROM teachers INNER JOIN subject_teacher  " +
        // " ON teachers.teacher_id = subject_teacher.teacher_id "+
        // "INNER JOIN subjects ON subject_teacher.subject_id = subjects.subject_id"; 
        // let [result] = await connection.query(sql);
        // console.log("datos recogidos");
        // console.log(result);



    }
    catch(err){
        console.log(err)
        await connection.end();
    }
}

main(); 




