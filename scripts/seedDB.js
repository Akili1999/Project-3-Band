const mongoose = require("mongoose");

const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/reactbooks'
);

const itemSeed = [
    {
        title: "The Metallica Band Forum",
        band: "Metallica",
        genre: "Heavy Metal / Rock",
        state: "California",
        city: "Los Angeles",
        recent: "Soon we will be on tour with the San Francisco Symphony Orchestra!"
    },
    {
        title: "The Periphery Band Forum",
        band: "Periphery",
        genre: "Progressive Metal",
        state: "Washington DC",
        city: "Washington DC",
        recent: "Soon we will be on tour in South America!"
    },
    {
        title: "The Tool Band Forum",
        band: "Tool",
        genre: "Progressive Rock",
        state: "California",
        city: "Los Angeles",
        recent: "New album coming soon, music now streamable on spotify!"
    }
];

db.Item
    .remove({})
    .then(() => db.Item.collection.insertMany(itemSeed))
    .then(data => {
        console.log(data.result.n + " forums inserted!");
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
