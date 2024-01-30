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


    }
    catch(err){
        console.log(err)
        await connection.end();
    }
}

main(); 




