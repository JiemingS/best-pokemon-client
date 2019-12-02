import React from 'react'
import TextField from '@material-ui/core/TextField'
import CheckIcon from '@material-ui/icons/Check'
import Button from '@material-ui/core/Button'
import './MyPokemonsForm.scss'

const MyPokemonsForm = ({ pokemon, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <div className="MyPokemonsFormName">
      <TextField
        label="Name"
        variant="outlined"
        placeholder="Name"
        value={pokemon.name}
        name="name"
        onChange={handleChange}
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
      />
      <TextField
        label="SecondType"
        variant="outlined"
        placeholder="SecondType"
        value={pokemon.typeTwo}
        name="typeTwo"
        onChange={handleChange}
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
