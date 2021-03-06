const jwt = require('jsonwebtoken');

const config = require('config');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    if (!token)
        return res.status(401).json({ msg: "access denied, no token"});

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: "Invalid Token"})
    }
}

module.exports = auth;
