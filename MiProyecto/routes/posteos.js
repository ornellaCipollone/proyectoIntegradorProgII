const express = require("express");
const router = express.Router();

const controller = require("../controllers/posteosController");

router.get('/detallePost/id/:id', controller.detallePost)
router.get('/agregarPost', controller.agregarPost)

module.exports = router
