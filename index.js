
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
  const Clan = require('./model/clanesModel.js');

const nuevoClan = new Clan({
  clan: {
    nombre: 'livee',
      gen1: {
        nombre: 'Comunidad de Fotosintéticos',
        habilidades: {
          fisicas: 'Pueden controlar las cosechas con pequeñas alteraciones genéticas en los seres vivos que modifican, visión nocturna y superinstinto natural',
          mentales: 'Tienen muy buena noción del tiempo y del espacio, pueden ecolocalizarse y saben encontrar recursos y refugio cercano muy rapido'
        },
        integrantes: ['Nahuru','Nioreu','Seychel','Madags','Zimb']
      },
      gen2: {
        nombre: 'Gran monte de estrellas',
        habilidades: {
          fisicas: 'Pueden hablar con la naturaeza y seguirla, tienen la capacidad de alterarla a su voluntad, ya sea plantas con espinas u ordas de gorilas que van hacia por ti.',
          mentales: 'tienen buena nocion del tiempo, del espacio, de los recursos, tienen esa vision nocturna que los caracteriza y además muchos otros sentido similares a los de las plantas'
        },
        integrantes: ['Zimb','Madags','Sauda','Botswin','Zamb','Tanz','Ang']
      },
      gen3: {
        nombre: 'Familia de la Horda',
        habilidades: {
          fisicas: 'en momentos de btalla se convieren en bestias humanoides que tienen capacidades fisicas similares',
          mentales: 'se vuelven uno mismo con el ambiente y te ataca de todas partes si así lo desea, lo controla a la perfección'
        },
        integrantes: ["Ang","Tanz","Zamb","Nighi","Togg","Espal","Vesta","DeLourence","Huece"]
      }
  }
})
console.log(nuevoClan.clan.gen1.habilidades.fisicas)
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto " + port);
});

