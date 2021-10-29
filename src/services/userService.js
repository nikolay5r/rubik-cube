const User = require('../models/User');

const create = (username, password) => User.create({ username, password });

const getByUsername = (name) => User.findOne({ username: name }).lean();

const getById = (id) => User.findById(id).lean();

const userService = {
    create,
    getByUsername,
    getById
}

module.exports = userService;

