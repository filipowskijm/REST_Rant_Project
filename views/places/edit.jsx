const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
            <div className='row'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="name" className='form-control'>Place Name</label>
                    <input  id="name" name="name" value={data.place.name} required />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="pic" className='form-control' >Place Picture</label>
                    <input id="pic" name="pic" />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="city" className='form-control' >City</label>
                    <input id="city" name="city" />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="state" className='form-control' >State</label>
                    <input id="state" name="state" />
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="cuisines" className='form-control' >Cuisines</label>
                    <input id="cuisines" name="cuisines" required />
                </div>
            </div>
            <input className='btn btn-primary' type="submit" value="Add Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
