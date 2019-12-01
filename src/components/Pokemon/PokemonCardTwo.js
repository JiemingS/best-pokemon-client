import React from 'react'
// import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import './PokemonCardTwo.scss'

// <CardDeck>
//   <Card className='yellow'>
//     <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-go/11272019/pokemon-go-friend-fest-169.jpg" />
//     <Card.Body>
//       <Card.Title className='white'>Pal Around in Pokémon GO Friend Fest</Card.Title>
//     </Card.Body>
//   </Card>
//   <Card className='blue'>
//     <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/trading-card-game/series/incrementals/swsh01-elite-trainer-box/swsh01-elite-trainer-box-169.jpg" />
//     <Card.Body>
//       <Card.Title className='white'><em>Sword & Shield</em> Elite Trainer Box Details</Card.Title>
//     </Card.Body>
//   </Card>
//   <Card className='black'>
//     <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/strategy/sword-shield/wild-area-guide/sword-shield-wild-area-guide-169-en.jpg" />
//     <Card.Body>
//       <Card.Title className='white'>Finding Shiny Pokémon and Gigantamax Pokémon in the Wild Area</Card.Title>
//     </Card.Body>
//   </Card>
// </CardDeck>

const PokemonCardTwo = (props) => {
  return (
    <CardColumns>
      <Card className='yellow'>
        <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-go/11272019/pokemon-go-friend-fest-169.jpg" />
        <Card.Body>
          <Card.Title className='white'>Pal Around in Pokémon GO Friend Fest</Card.Title>
        </Card.Body>
      </Card>
      <Card className='blue'>
        <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/trading-card-game/series/incrementals/swsh01-elite-trainer-box/swsh01-elite-trainer-box-169.jpg" />
        <Card.Body>
          <Card.Title className='white'><em>Sword & Shield</em> Elite Trainer Box Details</Card.Title>
        </Card.Body>
      </Card>
      <Card className='black'>
        <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/strategy/sword-shield/wild-area-guide/sword-shield-wild-area-guide-169-en.jpg" />
        <Card.Body>
          <Card.Title className='white'>Finding Shiny Pokémon and Gigantamax Pokémon in the Wild Area</Card.Title>
        </Card.Body>
      </Card>
    </CardColumns>
  )
}

export default PokemonCardTwo
