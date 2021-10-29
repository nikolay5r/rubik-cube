const jwt = require('jsonwebtoken');
const config = require('../config/config.json').development;
const userService = require('../services/userService')

exports.auth = (req, res, next) => {
    let token = req.cookies[config.AUTH_COOKIE];

    jwt.verify(token, config.SECRET, (err, decodedPayload) => {
        if (err) {
            return res.status(401), next()
        }

        let user = userService.getByUsername(decodedPayload.username);

        if (!user) {
            return res.status(401), next()
        }

        req.user = decodedPayload;
        res.locals.user = decodedPayload;
        next()
    })
}