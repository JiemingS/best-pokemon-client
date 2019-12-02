import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import './PokemonCardFour.scss'

const PokemonCardFour = (props) => {
  return (
    <div className="button">
      <ButtonToolbar>
        <Button variant="dark">Explore More Pokemon</Button>
      </ButtonToolbar>
    </div>
  )
}

export default PokemonCardFour
