import React from 'react'
// import BottomNavigation from '@material-ui/core/BottomNavigation'
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
// import FavoriteIcon from '@material-ui/icons/Favorite'
// import LocationOnIcon from '@material-ui/icons/LocationOn'
// import HomeIcon from '@material-ui/icons/Home'
// import TonalityIcon from '@material-ui/icons/Tonality'
import MyPokemonsOne from './MyPokemonsOne.js'
import BottomNavi from '../Shared/BottomNavi.js'

const MyPokemons = (props) => {
  // const classes = useStyles()
  const [value, setValue] = React.useState(2)

  return (
    <div>
      <BottomNavi
        value={value}
        setValue={setValue}
      />
      <MyPokemonsOne user={props.user} />
    </div>
  )
}

export default MyPokemons
