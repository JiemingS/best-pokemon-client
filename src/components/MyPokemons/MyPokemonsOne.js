import React, { useState } from 'react'
import MyPokemonsForm from './MyPokemonsForm.js'
// import MyPokemonsIndex from './MyPokemonsIndex.js'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter } from 'react-router-dom'
import MyPokemonsDnd from './MyPokemonsDnd.js'

const MyPokemonsOne = (props) => {
  const [pokemon, setPokemon] = useState({
    name: '',
    typeOne: '',
    typeTwo: '',
    imgUrl: ''
  })

  const handleChange = event => {
    console.log('event.target.name', event.target.name)
    event.persist()
    setPokemon(pokemon => ({ ...pokemon, [event.target.name]: event.target.value }))
  }

  const handleChangeTypeOne = (props) => {
    // event.persist()
    console.log('props', props)
    setPokemon(pokemon => ({ ...pokemon, typeOne: props }))
  }

  const handleChangeTypeTwo = (props) => {
    // event.persist()
    console.log('props', props)
    setPokemon(pokemon => ({ ...pokemon, typeTwo: props }))
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

  // MyPokemonsIndex user={props.user} />

  return (
    <div>
      <MyPokemonsForm
        pokemon={pokemon}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
      <MyPokemonsDnd
        handleChangeTypeOne={handleChangeTypeOne}
        handleChangeTypeTwo={handleChangeTypeTwo}
      />
    </div>
  )
}

export default withRouter(MyPokemonsOne)
