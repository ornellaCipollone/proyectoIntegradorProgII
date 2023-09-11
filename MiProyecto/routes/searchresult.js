const express = require("express");
const router = express.Router();

const controller = require("../controllers/SearchResultController");
router.use('/resultado',controller.resultado)

module.exports = router