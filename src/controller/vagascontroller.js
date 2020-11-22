const Vagas = require('../models/vagas');
const fs = require("fs");

const getAll = (req, res) => {
  console.log(req.url);
    Vagas.find(function (err, vagas) {
      res.status(200).send(vagas);
    })
};

const getById = (req, res) => {
  const id = req.params._id;
    vagas.find({id}, function(err, vagas) {
        res.status(200).send(vagas);
    })  
};

const getByCidade = (req, res) => {
    const cidade = req.params.cidade;
      vagas.find({cidade}, function(err, vagas) {
          res.status(200).send(vagas);
      })  
  };

const postVaga = (req, res) => {
  console.log(req.body);

  let vaga = new Vagas(req.body);
    vaga.save(function(err){
    if (err) res.status(500).send({ message: err.message })

    res.status(201).send(vaga.toJSON());
  })
};

const deleteVaga = (req, res) => {
    const cod = req.params.cod;
    const vagaFiltrada = vagas.find((vagas) => vagas.cod == cod);
    const index = vagas.indexOf(vagaFiltrada);
    series.splice( index, 1 );

    fs.writeFile("./src/model/vagas.js", JSON.stringify(vagas), function(err) {
        if (err) {
            return res.status(424).send({ message: err });
        };

        console.log("Vaga adicionada com sucesso!");

    });

    res.status(200).send(empresas);

};

const putVaga = (req, res) => {
  const cod = req.params.cod;

  try {
    
    Vagas.update(
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
  postVaga,
  deleteVaga,
  putVaga
};