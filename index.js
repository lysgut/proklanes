const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser =require("body-parser")
const mongoose = require("mongoose")
const urlMongoose = `mongodb+srv://lysgut:Mongoatlas177@cluster0.yvzut0t.mongodb.net/?retryWrites=true&w=majority`
const port = 1905
const ejs = require("ejs")

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.Promise = global.Promise; // Utilizar promesas nativas de Node.js

const db = mongoose.connection;
mongoose.connect(urlMongoose, { useNewUrlParser: true })
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((err) => console.error(err));

app.listen(port, () => {
    console.log("Servidor iniciado en el puerto " + port);
});