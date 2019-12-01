import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import HomeIcon from '@material-ui/icons/Home'
import TonalityIcon from '@material-ui/icons/Tonality'
import PokemonCardOne from './PokemonCardOne.js'
import PokemonCardTwo from './PokemonCardTwo.js'

import './Pokemon.scss'

// const useStyles = makeStyles({
//   root: {
//     color: 'green',
//     top: 0
//   }
// })

const Pokemon = (props) => {
  // const classes = useStyles()
  const [value, setValue] = React.useState(0)

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
        <BottomNavigationAction label="Pokedex" icon={<TonalityIcon />} />
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
      <PokemonCardOne />
      <PokemonCardTwo />
    </div>
  )
}

export default Pokemon
