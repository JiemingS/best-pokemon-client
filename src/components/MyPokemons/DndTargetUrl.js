import React, { Component } from 'react'
import './Dnd.scss'
import { DropTarget } from 'react-dnd'

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  }
}

class DndTarget extends Component {
  render () {
    const { connectDropTarget, hovered } = this.props
    const backgroundColor = hovered ? 'lightgreen' : 'black'

    return connectDropTarget(
      <div className="target" style={{ borderColor: backgroundColor }}>
        <div>Drag Img Over Here</div>
      </div>
    )
  }
}

export default DropTarget('item', {}, collect)(DndTarget)
