const userService = require('./userService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const SECRET = 'asjdjkasjkldjklasmdlsasokdlas';

const register = async (username, password, repeatPassword) => {
    const user = await userService.getByUsername(username);

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

const login = async (username, password) => {
    const user = await userService.getByUsername(username);
    if (!user) {
        throw 'Username or Password is incorrect!';
    }

    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
        throw 'Username or Password is incorrect!';
    }

    return jwt.sign({ username: user.username, password: user.password }, SECRET, { expiresIn: '3h' })
}


const authService = {
    register,
    login
}

module.exports = authService;