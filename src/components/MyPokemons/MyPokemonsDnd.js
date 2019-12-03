import React, { Component } from 'react'
import DndItem from './DndItem.js'
// import { withRouter } from 'react-router-dom'
import Target from './DndTarget.js'
import './Dnd.scss'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

class MyPokemonsDnd extends Component {
  state = {
    items: [
      { id: 'normal', name: 'normal' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' }
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
            <div className="MyPokemonsDnd-container">
              <div className="item-container">
                {this.state.items.map((item, index) => (
                  <DndItem key={item.id} item={item} handleDrop={(id) => this.deleteItem(id)} />
                ))}
              </div>
              <Target />
            </div>
          </div>
        </div>
      </DndProvider>
    )
  }
}

export default MyPokemonsDnd
