const express = require('express');
const cubeService = require('../services/cubeService');

const router = express.Router();

function renderCubeDetailsPage(req, res) {
    cubeService.getById(req.params.id)
        .then((cube) => res.render('details', { cube }))
        .catch((err) => console.log(err))
    
}

router.get('/details/:id', renderCubeDetailsPage);

module.exports = router;