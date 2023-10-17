const React = require('react');
const Def = require('../default');

function index(data){
    let placesFormatted = data.places.map((place) => {
        return(
            <div className='col-sm-6'>
                <h2 className='text-center'>{place.name}</h2>
                <p className='text-center'>
                    {place.food}
                </p>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
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
                <a href="/places/new">
                    <button className="btn btn-primary">New Place</button>
                </a>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}
module.exports = index