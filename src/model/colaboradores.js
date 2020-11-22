const mongoose = require('mongoose');

const colaboradoresSchema = new mongoose.Schema({
    nome: { type : String},
    pronome: { type : String },
    cpf: { type: String },
    dataNascimento: { type: String },
    cidade: { type: String},
    escolaridade: { type: String },
    CapacitacaoPlus: { type: Boolean},
    Busca: { type: String },
    email: { type: String },
    senha: { type: String }
},{
    versionKey: false
});

const Colaboradores = mongoose.model('Colaboradores', colaboradoresSchema);

module.exports = Colaboradores;