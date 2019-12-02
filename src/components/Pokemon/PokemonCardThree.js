import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './PokemonCardThree.scss'

const PokemonCardThree = (props) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="pokemon">
          <img
            className="d-block img"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>bulbasaur</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="pokemon">
          <img
            className="d-block img"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>ninetales</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="pokemon">
          <img
            className="d-block img"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>dodrio</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default PokemonCardThree
