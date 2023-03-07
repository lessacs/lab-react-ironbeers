import React, { useState } from 'react'
import axios from 'axios'

const AddBeer = () => {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuation, setAttenuation] = useState(0)
    const [contributed, setContributed] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const beerToCreate = {
            name: name,
            tagline: tagline,
            description: description,
            firstBrewed: firstBrewed,
            brewersTips: brewersTips,
            attenuation: attenuation,
            contributed: contributed,
        }
        try {
            await axios.post(
                'https://ih-beers-api2.herokuapp.com/beers/new',
                beerToCreate
            )
        } catch (error) {
            console.log(error)
        }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="name">Name:</label>
                  <input
                      onChange={(event) => setName(event.target.value)}
                      value={name}
                      type="text"
                      name="name"
                  />
              </div>
              <div>
                  <label htmlFor="tagline">Tagline:</label>
                  <input
                      onChange={(event) => setTagline(event.target.value)}
                      value={tagline}
                      type="text"
                      name="tagline"
                  />
              </div>
              <div>
                  <label htmlFor="description">Description:</label>
                  <input
                      onChange={(event) => setDescription(event.target.value)}
                      value={description}
                      type="text"
                      name="description"
                  />
              </div>
              <div>
                  <label htmlFor="first_brewed">First brewed:</label>
                  <input
                      onChange={(event) => setFirstBrewed(event.target.value)}
                      value={firstBrewed}
                      type="text"
                      name="first_brewed"
                  />
              </div>
              <div>
                  <label htmlFor="brewers_tips">Brewers tips:</label>
                  <input
                      onChange={(event) => setBrewersTips(event.target.value)}
                      value={brewersTips}
                      type="text"
                      name="brewers_tips"
                  />
              </div>
              <div>
                  <label htmlFor="attenuation">Attenuation level:</label>
                  <input
                      onChange={(event) => setAttenuation(event.target.value)}
                      value={attenuation}
                      type="number"
                      name="attenuation_level"
                      min={0}
                  />
              </div>
              <div>
                  <label htmlFor="contributed">Contributed by:</label>
                  <input
                      onChange={(event) => setContributed(event.target.value)}
                      value={contributed}
                      type='text'
                      name='contributed'
                    />
                  </div>
                  <button>Create</button>
          </form>
      </div>
  )
}
}
export default AddBeer


// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text