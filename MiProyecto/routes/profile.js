const express = require("express");
const router = express.Router();

const controller = require("../controllers/profileController");


router.get("/", controller.index)
router.get('/editar', controller.editar)
router.get('/detallePost/id/:id',controller.detallePost)

module.exports = router