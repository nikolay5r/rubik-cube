const express = require('express');
const cubeService = require('../services/cubeService');

const router = express.Router();

function renderCreatePage(req, res) {
    res.render('cube/createCube')
}

function createCube(req, res) {
    const { name, description, imageUrl, difficultyLevel } = { ...req.body }

    Number(difficultyLevel)

    cubeService.create(name, description, imageUrl, difficultyLevel)
        .then(() => res.redirect('/'))
        .catch((err) => {
            res.status(400)
                .send(err.message)
                .end()
        })
}


router.get('/cube/create', renderCreatePage);
router.post('/cube/create', createCube);

module.exports = router;