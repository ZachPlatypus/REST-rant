const React = require('react');
const Def = require('../default');

function index(data){
    let placesFormatted = data.places.map((place) => {
        console.log(place.id)
        return(
            <div className='col-sm-6'>
                <div className='centerImg'><img src={place.pic} alt={place.name}></img></div>
                <h2 className='text-center'>
                    <a href={`/places/${place.id}`}>{place.name}</a>
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
            <main className='btmSpace'>
                <h1>Places Index</h1>
                <div style={{width: '100%'}} className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}
module.exports = index