const express = require("express");
const router = express.Router();

const data = require("../data/modulo-datos");
const Controller = require("../controller/Controller");


router.get("/register",Controller.register)
router.get('/login',Controller.login)
router.get('/miPerfil',Controller.miPerfil)
router.get('/editar',Controller.editar)
router.get('/agregar',Controller.agregar)

module.exports = router