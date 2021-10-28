const User = require('../models/User');

const create = (username, password) => User.create({ username, password });

const getByUsername = (name) => User.findOne({ username: name }).lean();

const userService = {
    create,
    getByUsername,

}

module.exports = userService;

