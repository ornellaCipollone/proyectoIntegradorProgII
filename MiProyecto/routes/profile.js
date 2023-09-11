const express = require("express");
const router = express.Router();

const controller = require("../controllers/profileController");


router.get("/", controller.index)
router.get('/editar', controller.editar)


module.exports = router