import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DetailOneRight from './DetailOneRight'
import './DetailOne.scss'

const DetailONe = (props) => {
  console.log('propsOfDetail', props)

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <img src={props.pokemon.imgUrl} className='DetailOneImg'/>
        </Col>
        <Col sm={6}>
          <DetailOneRight pokemon={props.pokemon} />
        </Col>
      </Row>
    </Container>
  )
}

export default DetailONe
