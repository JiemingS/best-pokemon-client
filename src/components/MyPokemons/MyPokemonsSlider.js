import React from 'react'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const MyPokemonsSlider = (props) => {
  const marks = [
    {
      value: 0,
      label: '0cm'
    },
    {
      value: 20,
      label: '20cm'
    },
    {
      value: 37,
      label: '37cm'
    },
    {
      value: 100,
      label: '100cm'
    }
  ]

  const valuetext = (value) => {
    return `${value}°C`
  }

  // const handleChange = (event, value) => {
  //   console.log(event.target)
  // }

  // const handleDragStop = (event, value) => {
  //   console.log(event.target)
  // }

  const changeSlider = (event, value) => {
    // console.log('value', value)
    // console.log('this.props', props)
    props.handleChangeHeight(value)
  }

  // const valueLabelFormat = (value) => {
  //   return marks.findIndex(mark => mark.value === value) + 1
  // }

  return (
    <div>
      <Typography id="discrete-slider-custom" gutterBottom>
        <span className='heightSlider'>
          Choose the height for your Pokemon ~
        </span>
      </Typography>
      <Slider
        defaultValue={4}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(event, value) => changeSlider(event, value)}
        // onChange={handleChange}
        // onDragStop={handleDragStop}
      />
    </div>
  )
}

export default MyPokemonsSlider
