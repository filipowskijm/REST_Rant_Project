const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
            <div className='form-group'>
                <label htmlFor="name" className='form-control'>Place Name</label>
                <input  id="name" name="name" required />
            </div>
             <div className='form-group'>
                <label htmlFor="pic" className='form-control' >Place Picture</label>
                <input id="pic" name="pic" />
            </div>
            <div className='form-group'>
                <label htmlFor="city" className='form-control' >City</label>
                <input id="city" name="city" />
            </div>
            <div className='form-group'>
                <label htmlFor="state" className='form-control' >State</label>
                <input id="state" name="state" />
            </div>
            <div className='form-group'>
                <label htmlFor="cuisines" className='form-control' >Cuisines</label>
                <input id="cuisines" name="cuisines" required />
            </div>
            <div className="form-group">
                <label htmlFor="founded" className='form-control' >Founded Year</label>
                <input id="founded" name="founded" />
            </div>
            <input className='btn btn-primary' type="submit" value="Add Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form

