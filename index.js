const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('This is text')
})
app.listen(3000)