const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='centerImg'><img src={data.place.pic} alt={data.place.name}></img></div>
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            <p>Not Yet Rated</p>

            <h2>Description</h2>

            <div className='inlineBlock'><a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className='btn btn-danger'>Delete</button>
            </form></div>
            <h3>Comments</h3>
          </main>
        </Def>
    )
}

module.exports = show
