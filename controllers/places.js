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

module.exports = router;