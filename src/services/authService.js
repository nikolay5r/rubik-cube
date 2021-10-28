const userService = require('./userService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const SECRET = 'asjdjkasjkldjklasmdlsasokdlas';

const register = async (username, password, repeatPassword) => {
    const user = await userService.getByUsername(username);

    console.log(user);

    if (user) {
        throw 'Username already taken!';
    }

    if (password !== repeatPassword) {
        throw 'Password doesn\'t match repeated pasword!';
    }

    const hashPassword = await bcrypt.hash(password, 9);
    await userService.create(username, hashPassword)

    return jwt.sign({ username, hashPassword }, SECRET, { expiresIn: '3h' })
}

const authService = {
    register,
}

module.exports = authService;