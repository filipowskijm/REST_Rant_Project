const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      console.log(place)
      return (
        <div key={place.name}>
          <h2>
            <a href={`/places/${place.id}`} >
              {place.name}
            </a>
          </h2>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
  
module.exports = index