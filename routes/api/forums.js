const express = require('express');

const router = express.Router();

const auth = require('../../middleware/auth');

const Forum = require('../../models/Forum');

router.get('/', (req, res) => {
    Forum.find().sort({ date: -1 }).then(items => res.json(forums));
});

router.post('/', auth, (req, res) => {
    const newForum = new Forum({
        title: req.body.title,
        band: req.body.band,
        genre: req.body.genre,
        state: req.body.state,
        city: req.body.city
    });
    newForum.save().then(forum => res.json(forum));
});

router.delete('/:id', auth, (req, res) => {
    Forum.findById(req.params.id)
    .then(forum => forum.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
