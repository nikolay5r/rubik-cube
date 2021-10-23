const express = require('express');
const Cube = require('../models/Cube');
const cubeService = require('../services/cubeService');

const router = express.Router();

function renderCreateCubePage(req, res) {
    res.render('createCube')
}

function createCube(req, res) {
    const { name, description, imageUrl, difficultyLevel } = { ...req.body };
    const cube = new Cube(name, description, imageUrl, difficultyLevel);

    cubeService.addCube(cube)
        .then(() => res.redirect('/'))
}

router.get('/create', renderCreateCubePage);
router.post('/create', createCube);

module.exports = router;