import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const AllBeers = (props) => {

    const [allBeers, setAllBeers] = useState(null)
    const beer = props.beer
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
            setAllBeers(response)
        })
        .catch((e) => console.error(e))
    }, [])

    console.log(allBeers)

    if (!allBeers) {
        return <div className='Loading'>Loading beers...</div>
    }

  return (
    <div>
        {allBeers.map((beer) => {
            return <div className='ListOfBeers' key={beer._id}>
            <li><Link to={`/beer/${beer._id}`}>{beer.name}</Link></li>
            <img src={beer.image_url} />
            <li>{beer.tagline}</li>
            <li>{beer.description}</li>
            <li>{beer.contributed_by}</li>

            {/* beer={beer} /> */}
            </div>
    })}
    </div>
  )
}

export default AllBeers