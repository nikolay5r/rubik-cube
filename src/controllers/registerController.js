const express = require('express');

const router = express.Router();

function renderRegisterPage(req, res) {
    res.render('register')
}

function register(req, res) {
    
}

router.get('/register', renderRegisterPage)
router.post('/register', register)

module.exports = router;