const express = require("express");
const router = express.Router();

const controller = require("../controllers/agregarPostController");


router.get("/", controller.index)

module.exports = router