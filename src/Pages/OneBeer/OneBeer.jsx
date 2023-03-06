import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const OneBeer = () => {

    const [beer, setBeer] = useState(null)
    const params = useParams()
    console.log(params)

    useEffect(() => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
        .then((response) => {
            setBeer(response.data)
        })
        .catch((e) => console.error(e)
        )
    }, [params.id])

    if (!beer) {
        return 'loading...'
    }

  return (
        <div>
            <li>{beer.name}</li>
            <img src={beer.image_url}/>
            <li>{beer.tagline}</li>
            <li>{beer.description}</li>
            <li>{beer.contributed_by}</li>
        </div>
  )
}

export default OneBeer