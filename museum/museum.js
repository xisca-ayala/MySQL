const mysql = require("mysql2/promise");

async function main(){
    try{
        let connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Xismaygi86!",
            database: "proyectoMuseo"
        });
        console.log("Conexion correcta")

        // let sql = "SELECT pieces.name, location.location, property_status.loan_date, owner.name,owner.last_name, owner.email, owner.direction" +
        // "FROM pieces INNER JOIN location ON pieces.id_location = location.id_location" +
        // "INNER JOIN property_status ON pieces.id_property = property_status.id_property" +
        // "INNER JOIN owner ON pieces.id_owner = owner.id_owner"; 
        // let [result] = await connection.query(sql);
        // console.log("datos recogidos");
        // console.log(result);

        // let sql = " SELECT type_colection, COUNT(*) AS pieces_number FROM pieces" +
        // "INNER JOIN colections ON pieces.id_colection= colections.id_colection" +
        // "GROUP BY colections.type_colection" +
        // "ORDER BY pieces_number DESC"; 
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







