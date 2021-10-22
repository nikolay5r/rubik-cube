const express = require('express');

const router = express.Router()

function renderCreateCubePage(req, res) {
    res.render('index')
} 

router.get('/', renderCreateCubePage);

module.exports = router;