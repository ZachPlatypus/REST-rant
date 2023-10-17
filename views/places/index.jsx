const React = require('react');
const Def = require('../default');

function index(data){
    let placesFormatted = data.places.map((place) => {
        return(
            <div>
                <h2>{place.name}</h2>
                <h3>{place.food}</h3>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Places Index Page</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}
module.exports = index