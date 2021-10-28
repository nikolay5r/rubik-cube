const express = require('express');

const createController = require('./createController')
const editController = require('./editController')
const deleteController = require('./deleteController')

const router = express.Router();

router.use(createController);
router.use(deleteController);
router.use(editController);

module.exports = router;