import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import './PokemonCardFive.scss'

const PokemonCardFive = (props) => {
  return (
    <div className="wholeFive">
      <CardColumns>
        <Card className="lightBlueFive">
          <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-masters/11262019/pokemon-masters-169.jpg" />
          <Card.Body>
            <Card.Title className="whiteFive">Take On Giovanni & Mewtwo in Pokémon Masters</Card.Title>
            <Card.Text>
              Experience a legendary event and have the powerful duo join your team, and then prepare for the arrival of even more new sync pairs.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="deepgreenFive">
          <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/strategy/sword-shield/starters-guide/01/sword-shield-starters-guide-169-animated-en.gif" />
          <Card.Body>
            <Card.Title className="whiteFive">Tips to Begin Your Galar Region Adventure</Card.Title>
            <Card.Text>
              <em>Pokémon Sword</em> are filled with all sorts of things to do, and this handy guide will help you get started.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="brownFive">
          <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/strategy/go/terrakion/pokemon-go-169.jpg" />
          <Card.Body>
            <Card.Title className="whiteFive">Battle Terrakion in Pokémon GO Raids</Card.Title>
            <Card.Text className='whitePFive'>
              A second Legendary Pokémon originally discovered in the Unova region is making its debut in Raid Battles.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="wordFive">What is New This Week</div>
        <Card className="yellowFive">
          <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/trading-card-game/_tiles/sm12/secret-cards/sm12-secret-cards-169-en.jpg" />
          <Card.Body>
            <Card.Title className="whiteFive">Treasures of the Cosmic Eclipse</Card.Title>
            <Card.Text className=''>
              Secret cards show the friendship between Trainer and Pokémon in the latest Pokémon TCG expansion,<em>Sun & Moon—Cosmic Eclipse</em>.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="blackFive">
          <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/misc/_tiles/pokemon-center/pokemon-go-collection/pokemon-go-collection-169.jpg" />
          <Card.Body>
            <Card.Title className="whiteFive">Show Your Pokémon GO Team Spirit</Card.Title>
            <Card.Text className='whitePFive'>
              Team Mystic, Team Valor, and Team Instinct Trainers will love this new collection at the Pokémon Center.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="deepBlueFive">
          <Card.Img variant="top" src="https://assets.pokemon.com/assets//cms2/img/watch-pokemon-tv/_tiles/many-failures-of-ash-ketchum/ptv-the-many-failures-of-ash-ketchum-169.gif" />
          <Card.Body>
            <Card.Title className="whiteFive">The Many Failures of Ash Ketchum</Card.Title>
            <Card.Text className='whitePFive'>
              <em>Pokémon the Series</em>. See some of his most memorable losses now on Pokémon TV.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="newsFive">
          <Card.Body className="orangeFive">
            <Card.Title className="whiteFive">View All News</Card.Title>
          </Card.Body>
          <Card.Body className="lastBlueFive">
            <Card.Text>
              Keep up with all the latest developments!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </div>
  )
}

export default PokemonCardFive
