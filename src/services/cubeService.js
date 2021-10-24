const cubesDB = require('../data/cubes.json');
const Cube = require('../models/Cube');
const accessoryService = require('./accessoryService')

const create = (name, description, imageUrl, difficultyLevel) => Cube.create({name, description, imageUrl, difficultyLevel});

const getAll = () => Cube.find({}).lean();

const getById = (id) => Cube.findById(id).lean();

const attach = async (cubeId, accessoryId) => {
    let cube = await getById(cubeId);
    let accessory = await accessoryService.getById(accessoryId);

    cube.accessories.push(accessory);

    return cube.save();
}

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
    return getAll();
};

module.exports = {
    create,
    getAll,
    getById,
    attach,
    search
}