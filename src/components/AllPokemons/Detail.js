import React, { useEffect, useState } from 'react'
import BottomNavi from '../Shared/BottomNavi.js'
import { withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig.js'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import DetailOne from './DetailOne.js'

import './Detail.scss'

const Detail = (props) => {
  const [value, setValue] = React.useState(2)
  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    axios(`${apiUrl}/pokemons/${props.match.params.id}`)
      .then(res => {
        // console.log('res', res)
        // console.log('props', props)
        setPokemon(res.data.pokemon)
      })
      .catch(() => props.alert({ heading: 'That didn\'t work', message: 'Couldn\'t retrieve the requested Pokemon', variant: 'danger' }))
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/pokemons/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'You deleted a Pokemon', variant: 'warning' })
        props.history.push('/all_DIY_Pokemons')
      })
      .catch(() => {
        props.alert({ heading: 'Rut roh', message: 'Something went wrong', variant: 'danger' })
      })
  }

  // console.log('props', props)
  // console.log('pokemon', pokemon)

  if (!pokemon) {
    return <p>Loading stuff...</p>
  }

  return (
    <div>
      <BottomNavi
        value={value}
        setValue={setValue}
      />
      {props.user._id === pokemon.owner._id && (
        <div className='ownerBotton'>
          <Button href={`#all_DIY_Pokemons/${props.match.params.id}/edit`} variant="primary" className="mr-2">Update</Button>
          <Button onClick={handleDelete} variant="danger" className="mr-2">Delete</Button>
        </div>
      )}
      <DetailOne pokemon={pokemon} />
    </div>
  )
}

export default withRouter(Detail)
