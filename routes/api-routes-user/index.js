const express = require("express");

const router = express.Router();

const db = require("../../models");

const passport = require("../../config/passport")

router.post("/signup", (req, res) => {
    db.User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(createdUserInfo => {
        console.log("user has been added");
    })
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    const userInfo = {
        username: req.user.username,
        id: req.user._id
    }
    res.send(userInfo)
});

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no log out' })
    }
});

router.post('/find', (req, res, next) => {
    if (req.user !== undefined) {
        res.status(200)
        res.json({user: req.user})
    } else {
        res.status(401).send()
    }
});

router.post("/forums", (req, res) => {
    if (req.body.id) {
        db.User.findById(req.body.id)
        .then(user => {
            let userForums = {
                owned: user.owned_forums,
                borrowed: user.barrowed_forums
            }
            res.json(userForums)
        })
        .catch(err => {
            console.log("ERROR: " + err)
        })
    }
})

module.exports = router;
