const express = require("express");
const router = express.Router();
const controller = require("../controller/colaboradoresController");

router.get("/", controller.getAll);
router.get("/:_id", controller.getById);
router.post("/", controller.postColaborador);
router.delete("/:_id", controller.deleteColaborador);
router.put("/:_id", controller.putColaborador);

module.exports = router;