import React from 'react'
import './PokeDetailInfoLeft.scss'

const PokeDetailInfoLeft = (props) => {
  // console.log('PokeDetailInfoLeft props', props)
  // console.log('PokeDetailInfoLeft props.pokemon.sprites.front_default', props.pokemon.sprites.front_default)

  return (
    <div>
      <img src={props.pokemon.sprites.front_default} className='leftImg' />
    </div>
  )
}

export default PokeDetailInfoLeft
