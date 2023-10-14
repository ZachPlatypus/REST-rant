require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places.js'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).send(`<img src="https://httpstatusdogs.com/img/404.jpg" alt="404 Not Found">`)
})

app.listen(process.env.PORT)