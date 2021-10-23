const express = require('express');

const homeController = require("./controllers/homeController");
const cubeController = require("./controllers/cubeController")
const aboutController = require("./controllers/aboutController")
const errorController = require("./controllers/errorController")
const detailsController = require("./controllers/detailsController")

const router = express.Router();

router.use(homeController);
router.use(cubeController);
router.use(aboutController)
router.use(errorController)
router.use(detailsController)

module.exports = router;