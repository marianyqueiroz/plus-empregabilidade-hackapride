const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const index = require("./routes/index");
const empresas = require("./routes/empresasRoute");
const colaboradores = require("./routes/colaboradoresRoute");
const vagas = require("./routes/vagasRoute");

mongoose.connect("mongodb+srv://Mariany:marilinda@cluster0.qpbsb.mongodb.net/plus?retryWrites=true&w=majority",  { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function (){
    console.log("Successful connection!");
});

app.use(bodyParser.json());
app.use(function(res, req, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept"
    );
    next();
});
app.use("/", index);
app.use("/empresas", require("./routes/empresasRoute"));
app.use("/colaboradores", require("./routes/colaboradoresRoute"));
app.use("/vagas", require("./routes/vagasRoute"));

module.exports = app;