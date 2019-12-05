import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PokeDetailInfoLeft from './PokeDetailInfoLeft.js'
import InfoRight from './InfoRight.js'
import LeftChart from './LeftChart.js'

const PokeDetailInfo = (props) => {
  // console.log('PokeDetailInfo props', props)
  // console.log('PokeDetailInfo props.pokemon.stats', props.pokemon.stats)
  // console.log('PokeDetailInfo props.pokemon.forms.url', props.pokemon.species.url)
  const [chartData] = useState({
    labels: ['speed', 'special-defense', 'special-attack', 'defense', 'attack', 'hp'],
    datasets: [
      {
        label: 'Stats',
        data: [
          props.pokemon.stats[0].base_stat,
          props.pokemon.stats[1].base_stat,
          props.pokemon.stats[2].base_stat,
          props.pokemon.stats[3].base_stat,
          props.pokemon.stats[4].base_stat,
          props.pokemon.stats[5].base_stat
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ]
      }
    ]
  })

  return (
    <div>
      <div className='PokedexDetailHeader'>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}<span className='PokedexDetailHeaderId'>#{props.pokemon.id}</span></div>
      <Container>
        <Row>
          <Col sm={6}>
            <PokeDetailInfoLeft
              pokemon = {props.pokemon}
            />
          </Col>
          <Col sm={6}>
            <InfoRight
              url = {props.pokemon.species.url}
              height = {props.pokemon.height}
              weight = {props.pokemon.weight}
              abilities = {props.pokemon.abilities}
              setChain = {props.setChain}
            />
          </Col>
          <Col sm={12}>
            <LeftChart pokemon = {props.pokemon} data={chartData} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PokeDetailInfo
