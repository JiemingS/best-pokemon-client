import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import BottomNavigation from '@material-ui/core/BottomNavigation'
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
// import RestoreIcon from '@material-ui/icons/Restore'
// import FavoriteIcon from '@material-ui/icons/Favorite'
// import LocationOnIcon from '@material-ui/icons/LocationOn'
// import HomeIcon from '@material-ui/icons/Home'
// import TonalityIcon from '@material-ui/icons/Tonality'
import PokedexOne from './PokedexOne.js'
import BottomNavi from '../Shared/BottomNavi.js'

import './Pokedex.scss'

// const useStyles = makeStyles({
//   root: {
//     color: 'green',
//     top: 0
//   }
// })

const Pokedex = (props) => {
  // const classes = useStyles()
  const [value, setValue] = React.useState(1)

  return (
    <div>
      <BottomNavi
        value={value}
        setValue={setValue}
      />
      <PokedexOne />
    </div>
  )
}

export default Pokedex
