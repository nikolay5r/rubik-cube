const express = require('express');
const cubeService = require('../../services/cubeService')

const router = express.Router()

async function renderEditPage(req, res) {
    let cube = await cubeService.getById(req.params.id);

    res.render('cube/edit', { cube })
}

router.get('/cube/edit/:id', renderEditPage)

module.exports = router;