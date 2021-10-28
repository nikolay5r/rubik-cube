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

const search = (search, from, to) => {
    from = from === '' || from <= 0 ? 1 : Number(from)
    to = to === '' || to <= 0 || to >= 6 ? 6 : Number(to)

    if (from > to) {
        return Cube.find({}).lean();
    }

    return Cube.find({
        name: { $regex: search },
        difficultyLevel: {
            $gte: from,
            $lte: to
        }
    }).lean();

};

const edit = async (id, newName, newDescription, newImageUrl, newDifficultyLevel) => {
    let cube = await Cube.findByIdAndUpdate(id, { name: newName, description: newDescription, imageUrl: newImageUrl, difficultyLevel: newDifficultyLevel })

    return cube.save()
}

module.exports = {
    create,
    getAll,
    getById,
    attach,
    search,
    edit
}