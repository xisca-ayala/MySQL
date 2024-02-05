const express = require("express");
const cors = require("cors");
const errorHandling = require("./error/errorHandling");
const studentsRouters = require("./routers/students.routers");
const subjectsRouters = require("./routers/subjects.routers");

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(studentsRouters);
app.use(subjectsRouters);
app.use(errorHandling);

app.get("/", function(req, res){
    res.status(200).send({ok: true,
        message: 'Recibido!'});
});

app.get("/bye", function(req, res){
    res.status(200).send({ok: true,
        message: 'Adios!'});
});

module.exports = app; 