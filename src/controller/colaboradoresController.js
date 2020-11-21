const Colaboradores = require('../models/colaboradores');
const fs = require("fs");

const getAll = (req, res) => {
  console.log(req.url);
    Colaboradores.find(function (err, colaboradores) {
      res.status(200).send(colaboradores);
    })
};

const getById = (req, res) => {
  const id = req.params._id;
    colaboradores.find({id}, function(err, colaboradores) {
        res.status(200).send(colaboradores);
    })  
};

const postColaborador = (req, res) => {
  console.log(req.body);

  let colaborador = new Colaboradores(req.body);
    colaborador.save(function(err){
    if (err) res.status(500).send({ message: err.message })

    res.status(201).send(colaborador.toJSON());
  })
};



const deleteColaborador = (req, res) => {
    const id = req.params._id;
    const colaboradorFiltrado = colaboradores.find((colaboradores) => claboradores.id == _id);
    const index = colaboradores.indexOf(colaboradorFiltrado);
    series.splice( index, 1 );

    fs.writeFile("./src/model/colaboradores.js", JSON.stringify(colaboradores), function(err) {
        if (err) {
            return res.status(424).send({ message: err });
        };

        console.log("Colaborador adicionado com sucesso!");

    });

    res.status(200).send(colaboradores);

};

const putColaborador = (req, res) => {
  const id = req.params._id;

  try {
    
    Colaboradores.update(
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
  postColaborador,
  deleteColaborador,
  putColaborador
};