import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import MyPokemonsCard from './MyPokemonsCard.js'
import './MyPokemonsIndex.scss'

const MyPokemonsIndex = (props) => {
  const [myPokemons, setMyPokemons] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/pokemons`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => {
        const datas = res.data.pokemons
        const myDatas = datas.filter(data => data.owner === props.user._id)
        setMyPokemons(myDatas)
      })
      .catch(console.error)
  }, [])

  return (
    <div className="MyPokemonsIndexPart">
      <Container fluid={true}>
        <Row>
          { myPokemons.map(poke => <MyPokemonsCard
            key={poke._id}
            name={poke.name}
            typeOne={poke.typeOne}
            typeTwo={poke.typeTwo}
            url={poke.imgUrl}
          />)}
        </Row>
      </Container>
    </div>
  )
}

export default MyPokemonsIndex
