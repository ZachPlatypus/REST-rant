const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: String,
    food: {type: String, required: true},
    city: {type: String, default: 'Happytown'},
    state: {type: String, default: 'BD'},
    founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

/* module.exports = [{
    name: 'Farm Basket',
    city: 'Las Vegas',
    state: 'NV',
    food: 'Chicken, Turkey',
    pic: 'https://images.unsplash.com/photo-1626082929543-5bab0f090c42'
}, {
    name: 'R Burger',
    city: 'Las Vegas',
    state: 'NV',
    food: 'Burgers, Chicken',
    pic: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2'
}] */