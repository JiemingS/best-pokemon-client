import React from 'react'
import BottomNavi from '../Shared/BottomNavi.js'

const MyPokemons = (props) => {
  // const classes = useStyles()
  const [value, setValue] = React.useState(3)

  return (
    <div>
      <BottomNavi
        value={value}
        setValue={setValue}
      />
    </div>
  )
}

export default MyPokemons
