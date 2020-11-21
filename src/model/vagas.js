const mongoose = require('mongoose');

const empresasSchema = new mongoose.Schema({
    cod: { type : Number},
    vaga: { type: String },
    descricao: { type: String },
    quantidade: { type: Number },
    cidade:  { type: String}
},{
    versionKey: false
});

const Empresas = mongoose.model('Empresas', empresasSchema);

module.exports = Empresas;