import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState(null)
    const params = useParams()

    useEffect(() => {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((response) => {
            setRandomBeer(response.data)
        })
        .catch((e) => console.error(e))
    }, [])

    if (!randomBeer) {
        return 'loading...'
    }

  return (
        <div>
            <li>{randomBeer.name}</li>
            <img src={randomBeer.image_url}/>
            <li>{randomBeer.tagline}</li>
            <li>{randomBeer.description}</li>
            <li>{randomBeer.contributed_by}</li>
            <li>{randomBeer.first_brewed}</li>
            <li>{randomBeer.attenuation_level}</li>
        </div>
  )
}

export default RandomBeer