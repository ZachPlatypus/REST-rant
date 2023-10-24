const React = require('react');
const Def = require('../default');

function edit_form(data){
    return(
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name</label>
                        <input className='form-control' id="name" name="name" required></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input className='form-control' id="city" name="city"></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input className='form-control' id="state" name="state"></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='food'>Food Types</label>
                        <input className='form-control' id="food" name="food" required></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Picture</label>
                        <input type="url" className='form-control' id="pic" name="pic"></input>
                    </div>
                    <input className='btn btn-primary' type='submit' value='Add Place'></input>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form