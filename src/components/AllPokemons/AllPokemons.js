import React from 'react'
import BottomNavi from '../Shared/BottomNavi.js'
import AllPokemonsone from './AllPokemonsOne.js'

const AllPokemons = (props) => {
  // const classes = useStyles()
  const [value, setValue] = React.useState(3)

  // console.log(props.user)

  return (
    <div>
      <BottomNavi
        value={value}
        setValue={setValue}
      />
      <AllPokemonsone
        user={props.user}
      />
    </div>
  )
}

export default AllPokemons
