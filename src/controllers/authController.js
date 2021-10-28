const express = require('express');

const router = express.Router();

function renderLoginPage(req, res) {
    res.render('login')
}

function renderRegisterPage(req, res) {
    res.render('register')
}

function register(req, res) {
    

    res.render('register')
}

router.get('/login', renderLoginPage)

router.get('/register', renderRegisterPage)
router.post('/register', register)

module.exports = router;