const exphbs = require('express-handlebars');
const path = require('path');

function initHandlebars(app) {
    app.engine('hbs', exphbs({
        extname: 'hbs',
        defaultLayout: 'main'
    }))
    app.set('view engine', 'hbs')
    app.set('views', path.join(__dirname, '../views'))
}

module.exports = initHandlebars;