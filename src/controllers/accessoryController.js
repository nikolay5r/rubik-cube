const express = require('express');
const accessoryService = require('../services/accessoryService');

const router = express.Router();

function renderCreatePage(req, res) {
    res.render('createAccessory')
}

function createAccessory(req, res) {
    const { name, description, imageUrl } = { ...req.body }

    accessoryService.create(name, description, imageUrl)
        .then(() => res.redirect('/'))
        .catch((err) => {
            res.status(400)
                .send(err.message)
                .end()
        })
}

router.get('/accessory/create', renderCreatePage)
router.post('/accessory/create', createAccessory)

module.exports = router;