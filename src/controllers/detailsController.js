const express = require('express');
const cubeService = require('../services/cubeService');

const router = express.Router();

function renderCubeDetailsPage(req, res) {
    cubeService.getById(req.params.id)
        .then((cube) => {
            let accessories = cube.accessories;

            res.render('details', { cube, accessories })
        })
        .catch((err) => console.log(err))
    
}

router.get('/details/:id', renderCubeDetailsPage);

module.exports = router;