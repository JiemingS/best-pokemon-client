import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import HomeIcon from '@material-ui/icons/Home'
import TonalityIcon from '@material-ui/icons/Tonality'

const BottomNavi = (props) => {
  return (
    <BottomNavigation
      value={props.value}
      onChange={(event, newValue) => {
        props.setValue(newValue)
      }}
      showLabels
      className='bottomNavigation'
    >
      <BottomNavigationAction label="Home" href="#pokemons" icon={<HomeIcon />} />
      <BottomNavigationAction label="Pokedex" href="#pokedex" icon={<TonalityIcon className='rotate-icon' />} />
      <BottomNavigationAction label="DIY" href="#myPokemons" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  )
}

export default BottomNavi
