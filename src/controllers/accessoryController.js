const express = require('express');

const router = express.Router();

function renderCreatePage(req, res) {
    res.render('createAccessory')
}

router.get('/create', renderCreatePage)

module.exports = router;