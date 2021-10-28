const express = require('express');
const cubeService = require('../../services/cubeService')

const router = express.Router()

async function renderEditPage(req, res) {
    let cube = await cubeService.getById(req.params.id);

    res.render('cube/edit', { cube })
}

async function editCube(req, res) {
    const cubeId = req.params.id;
    const newName = req.body.name;
    const newDescription = req.body.description;
    const newImageUrl = req.body.imageUrl;
    const newDifficultyLevel = req.body.difficultyLevel;

    cubeService.edit(cubeId, newName, newDescription, newImageUrl, newDifficultyLevel)
        .then((cube) => res.redirect(`/details/${cube._id}`))
}

router.get('/cube/edit/:id', renderEditPage)
router.post('/cube/edit/:id', editCube)


module.exports = router;