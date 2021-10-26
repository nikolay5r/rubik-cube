const express = require('express');
const cubeService = require('../services/cubeService');

const router = express.Router()

function renderHomePage(req, res) {
    cubeService.getAll()
        .then((cubes) => res.render('index', { cubes }))
        .catch((err) => console.log('Error:', err))
}

function searchCubes(req, res) {
    const { search, from, to } = { ...req.body}

    cubeService.search(search, from, to)
        .then((cubes) => res.render('index', { cubes }))
}

router.get('/', renderHomePage);
router.post('/', searchCubes)

module.exports = router;