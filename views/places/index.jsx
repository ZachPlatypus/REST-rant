const React = require('react');
const Def = require('../default');

function index(data){
    let placesFormatted = data.places.map((place) => {
        return(
            <div>
                <h2>{place.name}</h2>
                <h3>{place.food}</h3>
                <br></br>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Places Index</h1>
                <a href="/">
                    <button className="btn btn-primary">Home</button>
                </a>
                {placesFormatted}
            </main>
        </Def>
    )
}
module.exports = index