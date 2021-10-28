const express = require('express');

const homeController = require("./controllers/homeController");
const cubeController = require("./controllers/cubeControllers/cubeRoutes")
const aboutController = require("./controllers/aboutController")
const errorController = require("./controllers/errorController")
const detailsController = require("./controllers/detailsController")
const accessoryController = require("./controllers/accessoryController")
const cubeAccessoryController = require("./controllers/cubeAccessoryController")
const loginController = require("./controllers/loginController")
const registerController = require("./controllers/registerController")

const router = express.Router();

router.use(homeController);
router.use(loginController);
router.use(registerController);
router.use(cubeController);
router.use(aboutController);
router.use(detailsController);
router.use(accessoryController);
router.use(cubeAccessoryController);


router.use(errorController);

module.exports = router;