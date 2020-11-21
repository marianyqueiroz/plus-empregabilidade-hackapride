const express = require("express");
const router = express.Router();
const controller = require("../controller/empresasController");

router.get("/", controller.getAll);
router.get("/:_id", controller.getById);
router.post("/", controller.postEmpresa);
router.delete("/:_id", controller.deleteEmpresa);
router.put("/:_id", controller.putEmpresa);

module.exports = router;