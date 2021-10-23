const express = require('express');
const cubeService = require('../services/cubeService');

const router = express.Router()

function renderHomePage(req, res) {
    cubeService.getAllCubes()
        .then((cubes) => res.render('index', { cubes }))
        .catch((err) => console.log('Error:', err))
}

router.get('/', renderHomePage);
// router.post('/', (req, res) => {
//     const cubes = cubeService.searchCubes(req.body)
//         res.render('index', { cubes })
// })

module.exports = router;