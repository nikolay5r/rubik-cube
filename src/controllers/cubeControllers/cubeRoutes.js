const express = require('express');

const createController = require('./createController')

const router = express.Router();

router.use(createController);

module.exports = router;