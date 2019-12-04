import React from 'react'
import TextField from '@material-ui/core/TextField'
import CheckIcon from '@material-ui/icons/Check'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import RandomName from './MyPokemonsRandomName'
import './MyPokemonsForm.scss'

const MyPokemonsForm = ({ pokemon, handleSubmit, handleChange, cancelPath, handleChangeName }) => (
  <form onSubmit={handleSubmit}>
    <div className="MyPokemonsFormName">
      <TextField
        label="Name"
        variant="outlined"
        placeholder="Name"
        value={pokemon.name}
        name="name"
        onChange={handleChange}
        required
      />
      <div className='RandomName'>
        <RandomName handleChangeName={handleChangeName} className='randomName'/>
      </div>
    </div>
    <div className="MyPokemonsFormName">
      <TextField
        label="Height"
        variant="outlined"
        placeholder="Height"
        value={pokemon.height}
        name="height"
        onChange={handleChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">cm</InputAdornment>
        }}
        required
      />
    </div>
    <div className="MyPokemonsFormTypes">
      <TextField
        className="MyPokemonsFormTypesFC"
        label="FirstType"
        variant="outlined"
        placeholder="FirstType"
        value={pokemon.typeOne}
        name="typeOne"
        onChange={handleChange}
        required
      />
      <TextField
        label="SecondType"
        variant="outlined"
        placeholder="SecondType"
        value={pokemon.typeTwo}
        name="typeTwo"
        onChange={handleChange}
        required
      />
    </div>
    <div className="MyPokemonsFormUrl">
      <TextField
        label="imgUrl"
        variant="outlined"
        placeholder="Url"
        value={pokemon.imgUrl}
        name="imgUrl"
        onChange={handleChange}
        required
      />
    </div>
    <div className="MyPokemonsFormButton">
      <Button
        variant="contained"
        color="secondary"
        endIcon={<CheckIcon />}
        type="submit"
      >
          Submit
      </Button>
    </div>
  </form>
)

export default MyPokemonsForm
