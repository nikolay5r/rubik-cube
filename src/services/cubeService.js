const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

const create = (name, description, imageUrl, difficultyLevel) => Cube.create({ name, description, imageUrl, difficultyLevel });

const getAll = () => Cube.find({}).lean();

const getById = (id) => Cube.findById(id).populate('accessories').lean();

const attach = async (cubeId, accessoryId) => {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    return cube.save()
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