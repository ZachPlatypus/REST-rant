const React = require('react');
const Def = require('../default');

function index(data){
    let placesFormatted = data.places.map((place) => {
        return(
            <div className='col-sm-6'>
                <img className='text-center' src={place.pic} alt={place.name}></img>
                <h2 className='text-center'>
                    <a href={`/places/${index}`}>{place.name}</a>
                </h2>
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
                <div style={{width: '100%'}} className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}
module.exports = index