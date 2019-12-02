import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import PokedexTwo from './PokedexTwo.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
// import Col from 'react-bootstrap/Col'

import './PokedexOne.scss'

const PokedexOne = (props) => {
  const [account, setAccount] = useState(12)
  // const account = 12
  const [pokesResult, setPokesResult] = useState([])

  const handleClick = (e) => {
    const num = account + 12
    console.log('num', num)
    setAccount(account + 12)
  }

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${account}`)
      .then(res => {
        setPokesResult(res.data.results)
      })
      .catch(console.error)
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
          { pokesResult.map(poke => <PokedexTwo
            key={poke.name}
            name={poke.name}
            url={poke.url}
          />)}
        </Row>
      </Container>
      <div className="pokedexOneButton">
        <ButtonToolbar>
          <Button variant="info" onClick={handleClick}>Explore More Pokemon</Button>
        </ButtonToolbar>
      </div>
    </div>
  )
}

export default PokedexOne
