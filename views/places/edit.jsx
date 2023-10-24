const React = require('react');
const Def = require('../default');

function edit_form(data){
    return(
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id="name" name="name" value={data.place.name} required></input>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Picture</label>
                            <input type="url" className='form-control' id="pic" name="pic" value={data.place.pic} ></input>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id="city" name="city" value={data.place.city}></input>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>State</label>
                            <input className='form-control' id="state" name="state" value={data.place.state}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='food'>Food Types</label>
                            <input className='form-control' id="food" name="food" value={data.place.food} required></input>
                        </div>
                        <input className='btn btn-primary' type='submit' value='Edit Place'></input>
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form