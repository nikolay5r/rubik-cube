const cubesDB = require('../data/cubes.json');
const fs = require('fs/promises');
const path = require('path');
const uniqid = require('uniqid');

const addCube = (cube) => {
    cube._id = uniqid();
    cubesDB.push(cube);

    return fs.writeFile(path.join(__dirname, '../data/cubes.json'), JSON.stringify(cubesDB, null, 2))
}

const getAllCubes = () => cubesDB;

const getCubeById = (id) => cubesDB.filter(cube => cube._id === id)[0]

module.exports = {
    addCube,
    getAllCubes,
    getCubeById
}