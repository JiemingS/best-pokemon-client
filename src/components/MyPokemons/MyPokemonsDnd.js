import React, { Component } from 'react'
import DndItem from './DndItem.js'
// import { withRouter } from 'react-router-dom'
import Target from './DndTarget.js'
import './Dnd.scss'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class MyPokemonsDnd extends Component {
  state = {
    items: [
      { id: 'normal', name: 'normal' },
      { id: 'fighting', name: 'fighting' },
      { id: 'flying', name: 'flying' },
      { id: 'poison', name: 'poison' },
      { id: 'ground', name: 'ground' },
      { id: 'rock', name: 'rock' },
      { id: 'bug', name: 'bug' },
      { id: 'ghost', name: 'ghost' },
      { id: 'steel', name: 'steel' },
      { id: 'fire', name: 'fire' },
      { id: 'water', name: 'water' },
      { id: 'grass', name: 'grass' },
      { id: 'electric', name: 'electric' },
      { id: 'psychic', name: 'psychic' },
      { id: 'ice', name: 'ice' },
      { id: 'dragon', name: 'dragon' },
      { id: 'dark', name: 'dark' },
      { id: 'fairy', name: 'fairy' },
      { id: 'unknown', name: 'unknown' },
      { id: 'shadow', name: 'shadow' }
    ],
    now: 1
  }

  deleteItem = id => {
    console.log('this.props', this.props)
    console.log('delete id: ' + id)
    console.log('now', this.state.now)
    if (this.state.now === 2) {
      this.setState({ now: 1 })
      this.props.handleChangeTypeTwo(id)
    } else {
      this.setState({ now: 2 })
      this.props.handleChangeTypeOne(id)
    }
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
            <Target />
            <div className="MyPokemonsDnd-container">
              <div className="item-container">
                <Container>
                  <Row>
                    {this.state.items.map((item, index) => (
                      <Col xs={6} md={4} key={item.id}>
                        <DndItem key={item.id} item={item} handleDrop={(id) => this.deleteItem(id)} />
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

export default MyPokemonsDnd
