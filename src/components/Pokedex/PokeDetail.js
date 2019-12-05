import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './PokeDetail.scss'
import BottomNavi from '../Shared/BottomNavi.js'
import PokeDetailInfo from './PokeDetailInfo.js'
import EvoChain from './EvoChain.js'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

const PokedexDetail = (props) => {
  // console.log('PokedexDetail props', props)
  // console.log('PokedexDetail props.match.params.name', props.match.params.name)
  const [onePokemon, setOnePokemon] = useState(null)
  const [value, setValue] = React.useState(1)
  const [chain, setChain] = useState('')
  let evoChainHtml

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
      .then(res => {
        // console.log('res', res)
        setOnePokemon(res.data)
      })
      .catch(() => props.alert({ heading: 'That didn\'t work', message: 'Couldn\'t retrieve the requested Pokemon', variant: 'danger' }))
  }, [])

  if (chain.url !== undefined) {
    // console.log('chain.url', chain.url)
    evoChainHtml = (
      <EvoChain
        url = {chain.url}
      />
    )
  } else {
    evoChainHtml = (
      <div></div>
    )
  }

  if (onePokemon === null) {
    return (
      <h1>Loading...</h1>
    )
  } else {
    return (
      <div>
        <BottomNavi
          value = {value}
          setValue = {setValue}
        />
        <PokeDetailInfo
          pokemon = {onePokemon}
          setChain = {setChain}
        />
        {evoChainHtml}
        <div className="button">
          <ButtonToolbar>
            <Button variant="info" href='#pokedex'><span style={{ color: 'white' }}>Explore More Pokemon</span></Button>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}

export default withRouter(PokedexDetail)
