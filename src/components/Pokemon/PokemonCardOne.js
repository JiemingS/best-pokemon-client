import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import './PokemonCardOne.scss'

const PokemonCardOne = (props) => {
  return (
    <div>
      <CardDeck className='bottom'>
        <Card className='lightBlue'>
          <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/trading-card-game/_tiles/swsh01/announce/swsh01-announce-11-en.jpg" />
          <Card.Body>
            <Card.Title className='white'>A New Era of the Pokémon TCG Is Near!</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="red">
          <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-sword-shield/11272019/sword-shield-11-en.jpg" />
          <Card.Body>
            <Card.Title className='white'>Meet New Galar Region Pokémon</Card.Title>
            <Card.Text className='grey'>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
              <img className="logo" src="https://assets.pokemon.com/assets//cms2/img/video-games/rating-logos/e_comicmischief_mildcartoonviolence.jpg" />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  )
}

export default PokemonCardOne
