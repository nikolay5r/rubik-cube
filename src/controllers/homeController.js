const express = require('express');
const cubeService = require('../services/cubeService');

const router = express.Router()

function renderHomePage(req, res) {
    const cubes = cubeService.getAllCubes()
    res.render('index', { cubes })
}

router.all('/', renderHomePage);

module.exports = router;