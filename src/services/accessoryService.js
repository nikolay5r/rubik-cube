const Accessory = require('../models/Accessory');

const create = (name, description, imageUrl) => Accessory.create({ name, description, imageUrl })

const getById = (id) => Accessory.findById(id).lean();

module.exports = {
    create,
    getById
}