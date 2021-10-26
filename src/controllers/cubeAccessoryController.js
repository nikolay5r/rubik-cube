const express = require('express');
const cubeService = require('../services/cubeService');
const accessoryService = require('../services/accessoryService');

const router = express.Router();

async function renderAttachPage(req, res) {
    let cube = await cubeService.getById(req.params.id)
    let accessories = await accessoryService.getAllWithout(cube.accessories.map(x => x._id))

    res.render('attachAccessory', { cube, accessories })
}

function attachAccessory(req, res) {
    console.log(req)
    res.redirect('/')
}

router.get('/attach/:id', renderAttachPage)
router.post('/attach/:id', attachAccessory)

module.exports = router;