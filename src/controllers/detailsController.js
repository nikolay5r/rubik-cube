const express = require('express');
const cubeService = require('../services/cubeService');

const router = express.Router();

function renderCubeDetailsPage(req, res) {
    const cube = cubeService.getCubeById(req.params.id)

    res.render('details', { cube })
}

router.get('/details/:id', renderCubeDetailsPage);

module.exports = router;