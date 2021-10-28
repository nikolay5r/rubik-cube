const express = require('express');
const cubeService = require('../../services/cubeService')

const router = express.Router()

async function renderDeletePage(req, res) {
    let cube = await cubeService.getById(req.params.id)

    res.render('cube/delete', { cube })
}

router.get('/cube/delete/:id', renderDeletePage)

module.exports = router;