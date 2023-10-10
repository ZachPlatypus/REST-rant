require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is text')
})

app.get('*', (req, res) => {
    res.status(404).send(`<img src="https://httpstatusdogs.com/img/404.jpg" alt="404 Not Found">`)
})

app.listen(process.env.PORT)