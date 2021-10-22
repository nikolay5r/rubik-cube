const express = require('express');

const router = express.Router()

function renderHomePage(req, res) {
    res.render('index')
} 

router.all('/', renderHomePage);

module.exports = router;