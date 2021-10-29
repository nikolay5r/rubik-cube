const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const routes = require('../routes');

const config = require('./config.json').development;
const initHandlebars = require('./handlebarsConfig');
const initDatabase = require('./databaseConfig');


function setupServer(app) {
    app.use(express.static(path.join(__dirname, '../public')))

    app.use(express.urlencoded({ extended: true }))

    initHandlebars(app);

    app.use(cookieParser())

    app.use(routes)

    initDatabase(config.DB_CONNECTION_STRING)
        .then(() => {
            app.listen(config.PORT, () => console.log(`App is running on http://localhost:${config.PORT}`))
        })
        .catch((err) => {
            console.log('App failed:', err);
        })
}

module.exports = setupServer;
