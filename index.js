const express = require('express');

const PORT = 5000;

const app = express();

app.all('/', (req, res) => {
    res.render('')
    res.end()
})

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))