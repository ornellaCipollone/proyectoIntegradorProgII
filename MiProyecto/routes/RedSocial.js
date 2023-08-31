const express = require("express");
const router = express.Router();

const data = require("../db/modulo-datos");
const controller = require("../controllers/mainController");


router.get("/register",controller.register)
router.get('/login',controller.login)
router.get('/miPerfil',controller.miPerfil)
router.get('/editar',controller.editar)
router.get('/agregar',controller.agregar)

module.exports = router