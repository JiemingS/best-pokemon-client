import React, { useState } from 'react'
import MyPokemonsForm from './MyPokemonsForm.js'
import MyPokemonsIndex from './MyPokemonsIndex.js'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter } from 'react-router-dom'

const MyPokemonsOne = (props) => {
  const [pokemon, setPokemon] = useState({
    name: '',
    typeOne: '',
    typeTwo: '',
    imgUrl: ''
  })

  const handleChange = event => {
    event.persist()
    setPokemon(pokemon => ({ ...pokemon, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    // console.log('props', props)

    axios({
      url: `${apiUrl}/pokemons`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { pokemon }
    })
      .then(setPokemon(pokemon => ({
        name: '',
        typeOne: '',
        typeTwo: '',
        imgUrl: ''
      })))
      .catch(console.error)
  }

  return (
    <div>
      <MyPokemonsForm
        pokemon={pokemon}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
      <MyPokemonsIndex user={props.user} />
    </div>
  )
}

export default withRouter(MyPokemonsOne)
