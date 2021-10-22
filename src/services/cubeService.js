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

const getCubeById = (id) => cubesDB.find(cube => cube._id === id);

const searchCubes = ({search, from, to}) => {
    let foundCubes = cubesDB.filter(cube => cube.name.includes(search));

    Number(from);
    Number(to);

    if (!from || from <= 0) {
        foundCubes = foundCubes.filter(cube => Number(cube.difficultyLevel) > 0)    
    } else {
        foundCubes = foundCubes.filter(cube => Number(cube.difficultyLevel) >= from)    

    }
    if (!to || to <= 0) {
        foundCubes = foundCubes.filter(cube => Number(cube.difficultyLevel) < 7)    
    } else {
        foundCubes = foundCubes.filter(cube => Number(cube.difficultyLevel) <= to)    
    }
    console.log(foundCubes);
    return foundCubes;
};
module.exports = {
    addCube,
    getAllCubes,
    getCubeById,
    searchCubes
}