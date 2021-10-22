const express = require('express');

const router = express.Router()

function renderCreateCubePage(req, res) {
    res.render('create')
} 

router.get('/create', renderCreateCubePage);

module.exports = router;