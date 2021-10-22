const express = require('express');

const router = express.Router();

function renderAboutPage(req, res) {
    res.render('about')
}

router.get('/about', renderAboutPage)

module.exports = router;