const express = require('express');
const Cube = require('../models/Cube');
const router = express.Router();
const cubeService = require('../services/cubeService');

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

}


router.get('/create', renderCreateCubePage);
router.post('/create', createCube);
router.get('/details/:id')

module.exports = router;