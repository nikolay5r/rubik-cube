const express = require('express');
const Cube = require('../models/Cube');
const cubeService = require('../services/cubeService');

const router = express.Router();

function renderCreateCubePage(req, res) {
    res.render('create')
}

function createCube(req, res) {
    const { name, description, imageUrl, difficultyLevel } = { ...req.body };
    const cube = new Cube(name, description, imageUrl, difficultyLevel);

    cubeService.addCube(cube)
        .then(() => res.redirect('/'))
}

function renderCubeDetailsPage(req, res) {
    const cube = cubeService.getCubeById(req.params.id)

    res.render('details', { cube })
}


router.get('/create', renderCreateCubePage);
router.post('/create', createCube);
router.get('/details/:id', renderCubeDetailsPage);

module.exports = router;