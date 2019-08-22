const express = require('express');

const mongoose = require('mongoose');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

const config = require('config')

const db = config.get('mongoURI')

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true }).then(() => console.log('Database Connected')).catch(err => console.log(err));

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
