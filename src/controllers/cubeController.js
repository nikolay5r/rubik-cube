const express = require('express');
const cubeService = require('../services/cubeService');


const router = express.Router();

function renderCreateCubePage(req, res, next) {
    res.render('createCube')
}

function createCube(req, res) {
    const { name, description, imageUrl, difficultyLevel } = { ...req.body }

    Number(difficultyLevel)

    cubeService.create(name, description, imageUrl, difficultyLevel)
        .then(() => res.redirect('/'))
        .catch((err) => console.log('Error:', err))
}

router.get('/create', renderCreateCubePage);
router.post('/create', createCube);

module.exports = router;