const express = require('express');
const cubeService = require('../services/cubeService');
const accessoryService = require('../services/accessoryService');

const router = express.Router();

function renderCreatePage(req, res) {
    res.render('createCube')
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

async function renderAttachPage(req, res) {
    let cube = await cubeService.getById(req.params.id)
    let accessories = await accessoryService.getAll()

    res.render('attachAccessory', { cube, accessories })
}

router.get('/create', renderCreatePage);
router.post('/create', createCube);
router.get('/attach/:id', renderAttachPage)

module.exports = router;