
/*const morgan = require("morgan")
const bodyParser =require("body-parser")
const ejs = require("ejs")
app.set("view engine", "ejs")*/
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const urlMongoose = `mongodb+srv://lysgut:Mongoatlas177@cluster0.yvzut0t.mongodb.net/?retryWrites=true&w=majority`
const port = 2005
app.get('/', (req, res) => {
  res.send('Hello World!')
})
mongoose.Promise = global.Promise; // Utilddizar promesas nativas de Node.js
mongoose.connect(urlMongoose, { useNewUrlParser: true })
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((err) => console.error(err));

  const Clan = require('./models/clanes'); // Reemplaza "clan" con el nombre de tu modelo

  Clan.find({})
    .then((docs) => {
      console.log("Los siguientes clanes se encuentran en la base de datos:");
      console.log(docs);
    })
    .catch((err) => {
      console.error(err);
    });
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto " + port);
});

