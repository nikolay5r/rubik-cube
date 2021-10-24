const cubesDB = require('../data/cubes.json');
const Cube = require('../models/Cube');

function create(name, description, imageUrl, difficultyLevel) {
    return Cube.create({name, description, imageUrl, difficultyLevel})
}


const getAllCubes = () => Cube.find({}).lean();

const getCubeById = (id) => Cube.findById(id).lean();

const search = ({search, from, to}) => {
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
    return getAllCubes();
};

module.exports = {
    create,
    getAllCubes,
    getCubeById,
    search
}