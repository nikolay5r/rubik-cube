const express = require('express');

const router = express.Router();

function renderLoginPage(req, res) {
    res.render('login')
}

router.get('/login', renderLoginPage)

module.exports = router;