const express = require("express");
const router = express.Router();

const controller = require("../controllers/usuariosController");

router.get('/detalleUsuario', controller.detalleUsuario)
router.get('/profile', controller.miPerfil)
router.get('/editProfile', controller.editarPerfil)

module.exports = router
