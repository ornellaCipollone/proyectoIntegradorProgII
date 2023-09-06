const express = require("express");
const router = express.Router();

const controller = require("../controllers/indexController");

router.get('/', controller.index);
router.get('/detallePost/id/:id',controller.detallePost)
router.get('/detalleUsuario', controller.detalleUsuario)

module.exports = router
