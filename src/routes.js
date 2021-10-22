const homeController = require("./controllers/homeController");
const express = require('express');

const router = express.Router();

router.use(homeController);

module.exports = router;