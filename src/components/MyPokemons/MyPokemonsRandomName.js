import React from 'react'
import LoopIcon from '@material-ui/icons/Loop'
import Fab from '@material-ui/core/Fab'

const RandomName = (props) => {
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  function generateName () {
    const lastName = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Thomas', 'Jackson', 'Martin', 'Lee', 'Thompson', 'White', 'Harris']

    const randomName = lastName[getRandomInt(0, lastName.length)]
    // console.log('randomName', randomName)
    props.handleChangeName(randomName)
  }

  return (
    <Fab color="inherit" aria-label="loop">
      <LoopIcon onClick={generateName}/>
    </Fab>
  )
}

export default RandomName
