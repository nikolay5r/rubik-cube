function renderHomePage(app) {
    app.all('/', (req, res) => {
        res.render('index')
    })
}

module.exports = renderHomePage;