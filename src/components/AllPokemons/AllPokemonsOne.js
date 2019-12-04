import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import apiUrl from '../../apiConfig.js'
import AllPokemonsTwo from './AllPokemonsTwo.js'
// import Col from 'react-bootstrap/Col'

import './AllPokemonsOne.scss'

const AllPokemonsOne = (props) => {
  const [pokesResult, setPokesResult] = useState([])
  // const [force, forceUpdate] = useState(true)

  useEffect(() => {
    console.log('load again')
    axios(`${apiUrl}/pokemons`)
      .then(res => {
        console.log(res.data.pokemons)
        setPokesResult(res.data.pokemons)
      })
      .catch(console.error)
    // setTimeout(forceUpdate(!force), 1000)
  }, [])

  // const handleClick = (e) => {
  //   const num = account + 12
  //   console.log('num', num)
  //   setAccount(account + 12)
  // }

  return (
    <div>
      <Container fluid={true}>
        <Row>
          { pokesResult.map(poke => <AllPokemonsTwo
            key={poke.id}
            id={poke.id}
            owner={poke.owner}
            url={poke.imgUrl}
            name={poke.name}
            typeOne={poke.typeOne}
            typeTwo={poke.typeTwo}
            poke={poke}
          />)}
        </Row>
      </Container>
    </div>
  )
}

export default AllPokemonsOne
