import React, { Component } from 'react'
import DndItemUrl from './DndItemUrl.js'
// import { withRouter } from 'react-router-dom'
import TargetUrl from './DndTargetUrl.js'
import './Dnd.scss'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class MyPokemonsDndUrl extends Component {
  state = {
    items: [
      { url: 'mareep', name: 'mareep', id: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/179.png' },
      { url: 'zangoose', name: 'zangoose', id: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/335.png' },
      { url: 'jumpluff', name: 'jumpluff', id: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/189.png' },
      { url: 'psyduck', name: 'psyduck', id: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png' },
      { url: 'togepi', name: 'togepi', id: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/175.png' },
      { url: 'ninetales', name: 'ninetales', id: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png' },
      { url: 'gengar', name: 'gengar', id: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png' },
      { url: 'electrode', name: 'electrode', id: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png' }
    ]
  }

  deleteItem = id => {
    // console.log('this.props', this.props)
    // console.log('delete id: ' + id)
    this.props.handleChangeUrl(id)
    // console.log('now', this.state.now)
    // if (this.state.now === 2) {
    //   this.setState({ now: 1 })
    //   this.props.handleChangeTypeTwo(id)
    // } else {
    //   this.setState({ now: 2 })
    //   this.props.handleChangeTypeOne(id)
    // }
    // this.setState(prevState => {
    //   const items = prevState.items
    //   const index = items.findIndex(item => item.id === id)
    //
    //   items.splice(index, 1)
    //
    //   return { items }
    // })
  }

  render () {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="MyPokemonsDnd">
          <div className="MyPokemonsDnd-intro">
            <div className="TypeTargets">
            </div>
            <TargetUrl />
            <div className="MyPokemonsDnd-container">
              <div className="item-container">
                <Container>
                  <Row>
                    {this.state.items.map((item, index) => (
                      <Col md={4} key={item.id}>
                        <DndItemUrl key={item.id} item={item} handleDrop={(id) => this.deleteItem(id)} />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </DndProvider>
    )
  }
}

export default MyPokemonsDndUrl
