const express = require('express');
const path = require('path');
const routes = require('./routes');

const config = require('./config/config.json').development;
const initHandlebars = require('./config/handlebarsConfig');
const initDatabase = require('./config/databaseConfig')

const app = express();

app.use(express.urlencoded({extended: true}))

initHandlebars(app);

app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, () => console.log(`App is running on http://localhost:${config.PORT}`))
    })
    .catch((err) => {
        console.log('App failed:', err);
    })
