import React from 'react'
import BottomNavi from '../Shared/BottomNavi.js'

const AuthHome = (props) => {
  const [value, setValue] = React.useState(-1)

  return (
    <BottomNavi
      value={value}
      setValue={setValue}
    />
  )
}

export default AuthHome
