
/*const morgan = require("morgan")
const bodyParser =require("body-parser")
const ejs = require("ejs")
app.set("view engine", "ejs")*/
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const urlMongoose = `mongodb+srv://lysgut:Mongoatlas177@cluster0.yvzut0t.mongodb.net/?retryWrites=true&w=majority`
const port = 20005
app.get('/', (req, res) => {
  res.send('Hello World!')
})
mongoose.connect(urlMongoose, { useNewUrlParser: true })

mongoose.connection.on('connected', function () {
  console.log('Conexión exitosa a la base de datos')

  const Clan = require('./models/clanes'); // Reemplaza "clan" con el nombre de tu modelo


  Clan.find({})
  .then((docs) => {
    console.log("Los siguientes clanes se encuentran en la base de datos:");
  const IntegrantesNombres = docs.map((clan) => "Integrantes Generacion 2 del clan:" + clan.nombre + ": " + clan.generaciones.gen2.integrantes);
  const IntegrantesCantidad = docs.map((clan) => "Cantidad de integrantes de la Generacion 2 del clan " + clan.nombre+ ": " + clan.generaciones.gen2.integrantes.length)
    console.log(IntegrantesNombres);
    console.log(IntegrantesCantidad);
  })
  .catch((err) => {
    console.error(err);
  });

  }
);




app.listen(port, () => {
    console.log("Servidor iniciado en el puerto " + port);
});



