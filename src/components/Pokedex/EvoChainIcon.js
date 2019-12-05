import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Figure from 'react-bootstrap/Figure'
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker
// } from '@material-ui/pickers'
// import DateFnsUtils from '@date-io/date-fns'
// import Grid from '@material-ui/core/Grid'

import './EvoChainIcon.scss'

const EvoChainIcon = (props) => {
  // console.log('EvoChainIcon props', props)
  const [oneOfChain, setOneOfChain] = useState(null)
  // const [dateDay, setDateDay] = useState(null)

  // const [selectedDate, setSelectedDate] = React.useState(new Date())
  //
  // const handleDateChange = date => {
  //   setSelectedDate(date)
  //   console.log('date!!!!!!!!!!!!!!!!', date)
  //   // setDateDay(date)
  // }

  // <MuiPickersUtilsProvider utils={DateFnsUtils}>
  //   <Grid container justify="space-around">
  //     <KeyboardDatePicker
  //       disableToolbar
  //       variant="inline"
  //       format="MM/dd/yyyy"
  //       margin="normal"
  //       id="date-picker-inline"
  //       label="Date picker inline"
  //       value={selectedDate}
  //       onChange={handleDateChange}
  //       KeyboardButtonProps={{
  //         'aria-label': 'change date'
  //       }}
  //     />
  //   </Grid>
  // </MuiPickersUtilsProvider>

  // Number.prototype.pad = function(size) {
  //   var s = String(this);
  //   while (s.length < (size || 2)) {s = "0" + s;}
  //   return s;
  // }
  //
  // (1).pad(3) // => "001"
  // (10).pad(3) // => "010"
  // (100).pad(3) // => "100"

  const pad = (target) => {
    let s = String(target)
    while (s.length < 3) {
      s = '0' + s
    }
    return s
  }

  useEffect(() => {
    axios(props.url)
      .then(res1 => {
        // console.log('res1.data.varieties[0].pokemon.url', res1.data.varieties[0].pokemon.url)
        axios(res1.data.varieties[0].pokemon.url)
          .then(res2 => {
            // console.log('second axios res2.data.sprites.front_default', res2.data.sprites.front_default)
            setOneOfChain(res2.data)
          })
      })
      .catch(console.error)
  }, [])

  if (oneOfChain !== null) {
    return (
      <div className='figure'>
        <Figure className='figure'>
          <Figure.Image
            alt="Pokemons Evolution_chain"
            src={oneOfChain.sprites.front_default}
            className='figureImage'
            roundedCircle
          />
          <Figure.Caption className='figureCaption'>
            <h3>
              {oneOfChain.name}<span style={{ color: '#a4acaf' }}>#{pad(oneOfChain.id)}</span>
            </h3>
            <span className=''>
              {oneOfChain.types.map(type => {
                return (
                  <span key={type.slot} className='pokedexTwoType evoIcon'>
                    <span className={type.type.name}>
                      {type.type.name}
                    </span>
                  </span>)
              })}
            </span>
          </Figure.Caption>
        </Figure>
      </div>
    )
  } else {
    return (
      <p>Loading ...</p>
    )
  }
}

export default EvoChainIcon
