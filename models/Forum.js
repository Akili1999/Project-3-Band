const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ForumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    band: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = Forum = mongoose.model('forum', ForumSchema);