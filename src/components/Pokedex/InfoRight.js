import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'

const InfoRight = (props) => {
  // console.log('InfoRight', props)
  const [, setPokemonSpecies] = useState({})
  const [flavorText, setFlavorText] = useState('')

  useEffect(() => {
    axios(props.url)
      .then(res => {
        // console.log('res', res)
        // console.log('res.data', res.data)
        // console.log('res.data.evolution_chain', res.data.evolution_chain)
        props.setChain(res.data.evolution_chain)
        // console.log('res.data.flavor_text_entries', res.data.flavor_text_entries)
        const found = res.data.flavor_text_entries.find(entry => entry.language.name === 'en')
        // console.log('found', found)
        // console.log('found.flavor_text', found.flavor_text)
        setPokemonSpecies(res.data)
        setFlavorText(found.flavor_text)
      })
      .catch(() => props.alert({ heading: 'That didn\'t work', message: 'Couldn\'t retrieve the requested Pokemon', variant: 'danger' }))
  }, [])

  const abilitiesHtml = props.abilities.map(skill => (
    <div key={skill.ability.name}>
      {skill.ability.name}
    </div>
  ))

  return (
    <div>
      <h5>
        {flavorText}
      </h5>
      <Card bg="info" text="white" >
        <Card.Body>
          <Card.Title>Height:<span style={{ color: 'black', marginLeft: '1vh' }}>{props.height}</span></Card.Title>
          <Card.Title>Weight:<span style={{ color: 'black', marginLeft: '1vh' }}>{props.weight}</span></Card.Title>
          <Card.Title>Abilities:</Card.Title>
          <Card.Title>
            <span style={{ color: 'black' }}>{abilitiesHtml}</span>
          </Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default InfoRight
