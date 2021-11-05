const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 1000;
//Public Static Path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath));
//Routing
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/weather', (req, res) => {
    res.render('weather');
})
app.get('*', (req, res) => {
    res.render('404', {
        errorMsg: 'Oops Page Not Found..!'
    })
})
app.listen(port, () => {
    console.log(`serving at ${port}`);
});