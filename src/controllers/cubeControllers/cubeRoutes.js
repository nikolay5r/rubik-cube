const express = require('express');

const createController = require('./createController')
const editController = require('./editController')

const router = express.Router();

router.use(createController);
router.use(editController);

module.exports = router;