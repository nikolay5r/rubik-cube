const express = require('express');
const authService = require('../services/authService')
const config = require('../config/config.json').development

const router = express.Router();

function renderLoginPage(req, res) {
    res.render('login')
}

function renderRegisterPage(req, res) {
    res.render('register')
}

function register(req, res) {
    const { username, password, repeatPassword } = { ...req.body };
    authService.register(username, password, repeatPassword)
        .then((token) => {
            res.cookie(config.AUTH_COOKIE, token)
                .redirect('/')
        })
        .catch((err) => {
            res.status(400)
                .send(err)
        })

}

function login(req, res) {
    const { username, password } = { ...req.body };
    authService.login(username, password)
        .then((token) => {
            res.cookie(config.AUTH_COOKIE, token)
                .redirect('/')
        })
        .catch((err) => {
            console.log(err)
            res.status(400)
                .send(err)
        })
}

router.get('/login', renderLoginPage)
router.post('/login', login)
router.get('/register', renderRegisterPage)
router.post('/register', register)

module.exports = router;