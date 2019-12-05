import React, { useState } from 'react'
import MyPokemonsForm from './MyPokemonsForm.js'
import { withRouter } from 'react-router-dom'
// import MyPokemonsIndex from './MyPokemonsIndex.js'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import MyPokemonsDnd from './MyPokemonsDnd.js'
import MyPokemonsDndUrl from './MyPokemonsDndUrl.js'
import MyPokemonsSlider from './MyPokemonsSlider.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MyPokemonsOne = (props) => {
  // const [updated, setUpdated] = useState(false)
  const [pokemon, setPokemon] = useState({
    name: '',
    height: '',
    typeOne: '',
    typeTwo: '',
    imgUrl: ''
  })

  const handleChange = event => {
    // console.log('event.target.name', event.target.name)
    event.persist()
    setPokemon(pokemon => ({ ...pokemon, [event.target.name]: event.target.value }))
  }

  const handleChangeTypeOne = (props) => {
    // event.persist()
    // console.log('props', props)
    setPokemon(pokemon => ({ ...pokemon, typeOne: props }))
  }

  const handleChangeTypeTwo = (props) => {
    // event.persist()
    // console.log('props', props)
    setPokemon(pokemon => ({ ...pokemon, typeTwo: props }))
  }

  const handleChangeUrl = (props) => {
    // event.persist()
    // console.log('props', props)
    setPokemon(pokemon => ({ ...pokemon, imgUrl: props }))
  }

  const handleChangeHeight = (props) => {
    // event.persist()
    // console.log('props', props)
    setPokemon(pokemon => ({ ...pokemon, height: props }))
  }

  const handleChangeName = (props) => {
    // event.persist()
    // console.log('props', props)
    setPokemon(pokemon => ({ ...pokemon, name: props }))
  }

  // const handleChangeUrl = (props) => {
  //   console.log('props', props)
  //   setPokemon(pokemon => ({ ...pokemon, imgUrl: props }))
  // }

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
        height: '',
        typeOne: '',
        typeTwo: '',
        imgUrl: ''
      })))
      .then(
        props.alert({ heading: 'Success', message: 'You created a Pokemon', variant: 'success' })
      )
      .catch(() => props.alert({ heading: 'Errr...', message: 'Something went wrong', variant: 'danger' }))
  }

  // MyPokemonsIndex user={props.user} />

  // if (updated) {
  //   props.history.push(`/books/${response.data.book._id}`)
  // }

  return (
    <div>
      <MyPokemonsForm
        pokemon={pokemon}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleChangeName={handleChangeName}
        cancelPath="/"
      />
      <MyPokemonsSlider
        handleChangeHeight={handleChangeHeight}
      />
      <Container>
        <Row>
          <Col md={6}>
            <MyPokemonsDnd
              handleChangeTypeOne={handleChangeTypeOne}
              handleChangeTypeTwo={handleChangeTypeTwo}
            />
          </Col>
          <Col md={6}>
            <MyPokemonsDndUrl
              handleChangeUrl={handleChangeUrl}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default withRouter(MyPokemonsOne)
