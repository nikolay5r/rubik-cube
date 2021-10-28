const User = require('../models/User');

const create = (username, password) => User.create({ username, password });

const userService = {
    create,

}

module.exports = userService;

