const express = require("express");
const router = express.Router();

const controller = require("../controllers/indexController");

router.get('/', controller.index);
router.get('/resultados', controller.resultados)
router.get('/register', controller.register)
router.get('/login', controller.login)

module.exports = router
