const express = require('express');
const cubeService = require('../services/cubeService');

const router = express.Router()

function renderHomePage(req, res) {
    const cubes = cubeService.getAllCubes()
    res.render('index', { cubes })
}

router.get('/', renderHomePage);
router.post('/', (req, res) => {
    const cubes = cubeService.searchCubes(req.body)
    if (cubes === []) {
        res.get('/');
    } else {
        res.render('index', { cubes })
    }
})

module.exports = router;