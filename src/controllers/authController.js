const express = require('express');
const authService = require('../services/authService')

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
            res.cookie('REGISTER_INFO', token);
            res.redirect('/')
        })
        .catch((err) => {
            res.status(400)
                .send(err)
        })

}

router.get('/login', renderLoginPage)

router.get('/register', renderRegisterPage)
router.post('/register', register)

module.exports = router;