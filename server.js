const express = require('express');

const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3001;

const passport = require("passport")

const session = require("express-session");

const routes = require("./routes")

app.use(
    session({
        secret: "terrible-string",
        resave: false,
        saveUninitialized: false,
        cookie: {secure: false}
    })
);

app.use(passport.initialize())

app.use(passport.session())

app.use(routes);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandbump");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
