const express = require('express');
const app = express();
const port = 3000;
const routerPersonas = require('./routes/personas');
const moongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

moongoose.connect('mongodb://127.0.0.1:27017/personas',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = moongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Conectado a la base de datos"));

app.use("/personas", routerPersonas);


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});