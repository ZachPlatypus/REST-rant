const router = require('express').Router();

router.get('/', (req, res) => {
    let places = [{
        name: 'Farm Basket',
        city: 'Las Vegas',
        state: 'NV',
        food: 'Chicken, Turkey',
    }, {
        name: 'R Burger',
        city: 'Las Vegas',
        state: 'NV',
        food: 'Burgers, Chicken',
    }]
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    res.send('GET /places')
})

router.put('/', (req, res) => {
    res.send('PUT /places')
})

router.delete('/', (req, res) => {
    res.send('DELETE /places')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

module.exports = router;