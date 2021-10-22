const express = require('express');

const router = express.Router();

function renderErrorPage(req, res) {
    res.render('404')
};

router.all('*', renderErrorPage);

module.exports = router;