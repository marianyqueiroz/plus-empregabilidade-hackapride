const express = require("express");
const router = express.Router();
const controller = require("../controller/vagasController");

router.get("/", controller.getAll);
router.get("/:vaga", controller.getByVagas);
router.get("/:cidade", controller.getByCidade);
router.post("/", controller.postVaga);
router.delete("/:cod", controller.deleteVaga);
router.put("/:cod", controller.putVaga);

module.exports = router;