import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import './Dnd.scss'
import { DragSource } from 'react-dnd'
// import Col from 'react-bootstrap/Col'

const itemSource = {
  beginDrag (props) {
    // console.log('dragging')
    return props.item
  },
  endDrag (props, monitor, component) {
    // console.log('end dragging')
    if (!monitor.didDrop()) {
      // console.log('nope')
      return
    }

    return props.handleDrop(props.item.id)
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class DndItem extends Component {
  render () {
    const { isDragging, connectDragSource, item } = this.props
    const opacity = isDragging ? 0 : 1
    return connectDragSource(
      <div className="itemUrl" style={{ opacity }}>
        <span><img src={item.id} className="itemImg"/></span>
      </div>
    )
  }
}

export default DragSource('item', itemSource, collect)(DndItem)
