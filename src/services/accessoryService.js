const Accessory = require('../models/Accessory');

function create(name, description, imageUrl) {
    return Accessory.create({ name, description, imageUrl })
}

module.exports = {
    create,
}