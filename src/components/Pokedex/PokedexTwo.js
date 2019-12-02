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
        console.log('res', res)
        console.log('res.data.types', res.data.types)
        console.log('res.data.sprites', res.data.sprites.front_default)
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
            <div className='pokedexTwoId'>
              #{pokeInfo.id}
            </div>
            <div className='pokedexTwoName'>
              <strong>
                {pokeInfo.name}
              </strong>
            </div>
            <div className='pokedexTwoTypes'>
              {pokeTypes.map(type => {
                return (
                  <div key={type} className='pokedexTwoType'>
                    <div className={type}>
                      {type}
                    </div>
                  </div>)
              })}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default PokedexTwo
