import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

import './PokedexOne.scss'

const PokedexOne = (props) => {
  // const [account, setAccount] = useState(12)
  const account = 12
  const [pokeResult, setPokeResult] = useState([])
  const pokeSingle = []
  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${account}`)
      .then(res => {
        setPokeResult(res.data.results)
      })
      .catch(console.error)
  }, [])

  pokeResult.map(poke => {
    axios(poke.url)
      .then(res => {
        const TYPE = res.data.types.map(type => {
          return type.type.name
        })
        const pok = {
          id: res.data.id,
          name: res.data.name,
          img: res.data.sprites.front_default,
          type: TYPE.toString()
        }
        pokeSingle.push(pok)
      })
      .catch(console.error)
  })

  return (
    <div>
      <h1>Hi</h1>
      <ul>
        { pokeSingle.map(poke => <li key={poke.id}>{poke.name}</li>)}
        { console.log(pokeSingle)}
      </ul>
    </div>
  )
}

export default PokedexOne
