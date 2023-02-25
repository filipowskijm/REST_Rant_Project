const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div key={place.name}>
          <h2>
            <a href={`/places/${index}`} >
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
  // let placesFormatted = data.places.map((place, index) => {
  //   return (
  //     <div className="col-sm-6">
  //       <h2>
  //         <a href={`/places/${index}`} >
  //           {place.name}
  //         </a>
  //       </h2>
  //       <p className="text-center">
  //         {place.cuisines}
  //       </p>
  //       <img src={place.pic} alt={place.name} />
  //       <p className="text-center">
  //         Located in {place.city}, {place.state}
  //       </p>
  //     </div>
  //   )
  // })

  
  
module.exports = index