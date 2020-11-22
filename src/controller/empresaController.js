const Empresas = require('../models/empresas');
const fs = require("fs");

const getAll = (req, res) => {
  console.log(req.url);
    Empresas.find(function (err, empresas) {
      res.status(200).send(empresas);
    })
};

const getById = (req, res) => {
  const id = req.params._id;
    empresas.find({id}, function(err, empresas) {
        res.status(200).send(empresas);
    })  
};

const postEmpresa = (req, res) => {
  console.log(req.body);

  let empresa = new Empresas(req.body);
    empresa.save(function(err){
    if (err) res.status(500).send({ message: err.message })

    res.status(201).send(empresa.toJSON());
  })
};

const deleteEmpresa = (req, res) => {
    const id = req.params._id;
    const empresaFiltrada = empresas.find((empresas) => empresas.id == _id);
    const index = empresas.indexOf(empresaFiltrada);
    series.splice( index, 1 );

    fs.writeFile("./src/model/empresas.js", JSON.stringify(empresas), function(err) {
        if (err) {
            return res.status(424).send({ message: err });
        };

        console.log("Empresa adicionada com sucesso!");

    });

    res.status(200).send(empresas);

};

const putEmpresa = (req, res) => {
  const id = req.params._id;

  try {
    
    Empresas.update(
        { id },
        { $set: req.body },
        { upsert : true},
        function (err) {
        res.status(201).send({ message: "Arquivo atualizado com sucesso!" });
    })

  } catch (err) {
    return res.status(424).send({ message: err.message });
  }
}

module.exports = {
  getAll,
  getById,
  postEmpresa,
  deleteEmpresa,
  putEmpresa
};