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
    const backgroundColor = hovered ? 'lightgreen' : 'white'

    return connectDropTarget(
      <div className="target" style={{ background: backgroundColor }}>
        Target
      </div>
    )
  }
}

export default DropTarget('item', {}, collect)(DndTarget)
