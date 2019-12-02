import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import HomeIcon from '@material-ui/icons/Home'
import TonalityIcon from '@material-ui/icons/Tonality'
import MyPokemonsOne from './MyPokemonsOne.js'

const MyPokemons = (props) => {
  // const classes = useStyles()
  const [value, setValue] = React.useState(2)

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        className='bottomNavigation'
      >
        <BottomNavigationAction label="Home" href="#pokemons" icon={<HomeIcon />} />
        <BottomNavigationAction label="Pokedex" href="#pokedex" icon={<TonalityIcon className='rotate-icon' />} />
        <BottomNavigationAction label="DIY" href="#myPokemons" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
      <MyPokemonsOne user={props.user} />
    </div>
  )
}

export default MyPokemons
