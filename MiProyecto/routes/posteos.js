const express = require("express");
const router = express.Router();

const controller = require("../controllers/posteosController");

router.get('/detallePost/id/:id', controller.detallePost)
router.get('/agregarPost', controller.agregarPost)
router.post('/agregarPost/procesar',controller.procesarPost)

module.exports = router
