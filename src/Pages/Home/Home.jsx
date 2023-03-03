import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ul>
        <li><Link to='/AllBeers'>All Beers</Link></li>
        <li><Link to='/RandomBeer'>Random Beer</Link></li>
        <li><Link to='/NewBeer'>New Beer</Link></li>
      </ul>
    </div>
  )
}

export default Home