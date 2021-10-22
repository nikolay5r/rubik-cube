const express = require('express');
const path = require('path');
const initHandlebars = require('./config/handlebarsConfig');
const routes = require('./routes');

const PORT = 5000;

const app = express();

initHandlebars(app);

app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))