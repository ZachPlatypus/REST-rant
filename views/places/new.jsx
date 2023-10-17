const React = require('react');
const Def = require('../default');

function new_form(){
    return(
        <Def>
            <main>
                <h1>Add A New Place</h1>
                <form method="POST" action="/places">
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
                    <input className='btn btn-primary' type='submit' value='Add Place'></input>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form;