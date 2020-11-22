const mongoose = require('mongoose');

const vagasSchema = new mongoose.Schema({
    cod: { type : Number},
    vaga: { type: String },
    descricao: { type: String },
    quantidade: { type: Number },
    cidade:  { type: String}
},{
    versionKey: false
});

const Vagas = mongoose.model('Vagas', vagasSchema);

module.exports = Vagas;