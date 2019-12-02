import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './PokedexTwo.scss'

const PokedexTwo = (props) => {
  const [pokeInfo, setPokeInfo] = useState({})
  const [pokeUrl, setPokeUrl] = useState('')
  const [pokeTypes, setPokeTypes] = useState([])

  useEffect(() => {
    axios(props.url)
      .then(res => {
        setPokeInfo(res.data)
        // setPokeTypes(res.data.types)
        // console.log('res', res)
        // console.log('res.data.types', res.data.types)
        // console.log('res.data.sprites', res.data.sprites.front_default)
        setPokeUrl(res.data.sprites.front_default)
        setPokeTypes(res.data.types.map(type => {
          return type.type.name
        }
        ))
      })
      .catch(console.error)
  }, [])

  return (
    <Col sm={3}>
      <Card className='pokedexTwoBorder pikapika' as={'a'} href='#pokemons'>
        <Card.Img variant="top" className="pokedexTwoImg" src={pokeUrl} />
        <Card.Body>
          <Card.Text>
            <span className='pokedexTwoId'>
              #{pokeInfo.id}
            </span>
          </Card.Text>
          <Card.Text>
            <span className='pokedexTwoName'>
              <strong>
                {pokeInfo.name}
              </strong>
            </span>
          </Card.Text>
          <Card.Text>
            <span className='pokedexTwoTypes'>
              {pokeTypes.map(type => {
                return (
                  <span key={type} className='pokedexTwoType'>
                    <span className={type}>
                      {type}
                    </span>
                  </span>)
              })}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PokedexTwo
