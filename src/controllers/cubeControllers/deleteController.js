const express = require('express');
const cubeService = require('../../services/cubeService')

const router = express.Router()

async function renderDeletePage(req, res) {
    let cube = await cubeService.getById(req.params.id)

    res.render('cube/delete', { cube })
}

async function deleteCube(req, res) {
    cubeService.del(req.params.id)
        .then(() => res.redirect('/'))
}

router.get('/cube/delete/:id', renderDeletePage)
router.post('/cube/delete/:id', deleteCube)

module.exports = router;