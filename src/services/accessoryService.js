const Accessory = require('../models/Accessory');

const create = (name, description, imageUrl) => Accessory.create({ name, description, imageUrl })

const getById = (id) => Accessory.findById(id).lean();

const getAll = () => Accessory.find({}).lean();

module.exports = {
    create,
    getById,
    getAll
}