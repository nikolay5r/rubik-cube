const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = 5000;

const app = express();

app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


app.all('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))