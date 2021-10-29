const express = require('express');
const cubeService = require('../services/cubeService');
const authService = require('../services/authService');

const router = express.Router();

function renderCubeDetailsPage(req, res) {
    cubeService.getById(req.params.id)
        .then((cube) => {
            let accessories = cube.accessories;
            let isOwner = authService.isOwn(cube, req.user)

            res.render('cube/details', { cube, accessories, isOwner })
        })
        .catch((err) => console.log(err))
    
}

router.get('/details/:id', renderCubeDetailsPage);

module.exports = router;