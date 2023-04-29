const mongoose = require('mongoose');

const clanSchema = new mongoose.Schema({
  clan: {
    nombre: { type: String, required: true },
      gen1: {
        nombre: { type: String, required: true },
        habilidades: {
          fisicas: { type: String, required: true },
          mentales: { type: String, required: true }
        },
        integrantes: [{ type: String }]
      },
      gen2: {
        nombre: { type: String, required: true },
        habilidades: {
          fisicas: { type: String, required: true },
          mentales: { type: String, required: true }
        },
        integrantes: [{ type: String }]
      },
      gen3: {
        nombre: { type: String, required: true },
        habilidades: {
          fisicas: { type: String, required: true },
          mentales: { type: String, required: true }
        },
        integrantes: [{ type: String }]
      }
  }
});

const Clan = mongoose.model('Clan', clanSchema);

module.exports = Clan;
