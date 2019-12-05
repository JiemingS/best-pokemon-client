import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EvoChain = (props) => {
  console.log('EvoChain props.url', props.url)
  const [urlArray, setUrlArray] = useState([])

  if (props.url) {
    useEffect(() => {
      axios(props.url)
        .then(res => {
          // console.log('res', res)
          // console.log('res.data', res.data)
          // console.log('res.data.chain', res.data.chain)
          // console.log('res.data.chain.evolves_to[0]', res.data.chain.evolves_to[0])
          // console.log('1stUrl', res.data.chain.species.url)
          // console.log('2ndUrl', res.data.chain.evolves_to[0].species.url)
          // console.log('3rdUrl', res.data.chain.evolves_to[0].evolves_to[0].species.url)
          // console.log('4thUrl', res.data.chain.evolves_to[0].evolves_to[0].evolves_to[0].species.url)
          let lifeChain = res.data.chain
          const lifeUrls = []
          while (lifeChain.evolves_to[0] !== undefined) {
            console.log('lifeChain', lifeChain)
            console.log('lifeChain', lifeChain.species.url)
            lifeUrls.push(lifeChain.species.url)
            lifeChain = lifeChain.evolves_to[0]
          }
          lifeUrls.push(lifeChain.species.url)
          console.log('lifeUrls', lifeUrls)
          setUrlArray(lifeUrls)
        })
        .catch(console.error)
    }, [])
  }

  return (
    <Container>
      <Row>
        {urlArray.map(url => (
          <Col sm={12 / urlArray.length} key={url}>
            sm={12 / urlArray.length}
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default EvoChain
