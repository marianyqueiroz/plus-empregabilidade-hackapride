const mongoose = require('mongoose');

const empresasSchema = new mongoose.Schema({
    nome: { type : String},
    cnpj: { type: String },
    mentoriaPlus : { type: Boolean }
},{
    versionKey: false
});

const Empresas = mongoose.model('Empresas', empresasSchema);

module.exports = Empresas;