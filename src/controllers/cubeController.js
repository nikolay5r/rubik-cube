const express = require('express');
const cubeService = require('../services/cubeService');

const router = express.Router();

function renderCreatePage(req, res) {
    console.log(req.user)
    res.render('cube/create')
}

function createCube(req, res) {
    const { name, description, imageUrl, difficultyLevel } = { ...req.body }
    
    const creator = req.user.username;

    Number(difficultyLevel)

    cubeService.create(name, description, imageUrl, difficultyLevel, creator)
        .then(() => res.redirect('/'))
        .catch((err) => {
            res.status(400)
                .send(err.message)
                .end()
        })
}


async function renderDeletePage(req, res) {
    let cube = await cubeService.getById(req.params.id)

    res.render('cube/delete', { cube })
}

async function deleteCube(req, res) {
    cubeService.del(req.params.id)
        .then(() => res.redirect('/'))
}


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

router.get('/cube/create', renderCreatePage);
router.post('/cube/create', createCube);
router.get('/cube/edit/:id', renderEditPage)
router.post('/cube/edit/:id', editCube)
router.get('/cube/delete/:id', renderDeletePage)
router.post('/cube/delete/:id', deleteCube)

module.exports = router;