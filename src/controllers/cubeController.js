const express = require('express');
const Cube = require('../models/Cube');
const router = express.Router();
const fs = require('fs/promises');
const path = require('path');
const cubesDB = require('../data/cubes.json')

function renderCreateCubePage(req, res) {
    res.render('create')
}


function createCube(req, res) {
    const { name, description, imageUrl, difficultyLevel } = { ...req.body };
    const cube = new Cube(name, description, imageUrl, difficultyLevel);

    addCube(cube)
        .then(() => res.redirect('/'))
}

function addCube(cube) {
    cubesDB.push(cube);

    return fs.writeFile(path.join(__dirname, '../data/cubes.json'), JSON.stringify(cubesDB, null, 2))
}


router.get('/create', renderCreateCubePage);
router.post('/create', createCube)

module.exports = router;