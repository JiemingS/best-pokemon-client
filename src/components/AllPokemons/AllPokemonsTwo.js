import React from 'react'
// import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './AllPokemonsTwo.scss'

const AllPokemonsTwo = (props) => {
  // console.log('props', props)
  // const [pokeInfo, setPokeInfo] = useState({})
  // const [pokeUrl, setPokeUrl] = useState('')
  // const [pokeTypes, setPokeTypes] = useState([])
  //
  // useEffect(() => {
  //   axios(props.url)
  //     .then(res => {
  //       setPokeInfo(res.data)
  //       // setPokeTypes(res.data.types)
  //       // console.log('res', res)
  //       // console.log('res.data.types', res.data.types)
  //       // console.log('res.data.sprites', res.data.sprites.front_default)
  //       setPokeUrl(res.data.sprites.front_default)
  //       setPokeTypes(res.data.types.map(type => {
  //         return type.type.name
  //       }
  //       ))
  //     })
  //     .catch(console.error)
  // }, [])

  return (
    <Col sm={3}>
      <Card className='AllPokemonsTwoBorder Allpikapika' as={'a'} href={`#all_DIY_Pokemons/${props.poke._id}`}>
        <Card.Img variant="top" className="AllPokemonsTwoImg" src={props.url} />
        <Card.Body>
          <Card.Text>
            <span className='pokedexTwoId'>
              <i>by:</i>{props.owner.email}
            </span>
          </Card.Text>
          <Card.Text>
            <span className='AllPokemonsTwoName'>
              <strong>
                {props.name}
              </strong>
            </span>
          </Card.Text>
          <Card.Text>
            <span className='AllPokemonsTwoTypes'>
              <span className='AllPokemonsTwoType'>
                <span className={props.typeOne}>
                  {props.typeOne}
                </span>
              </span>
              <span className='AllPokemonsTwoType'>
                <span className={props.typeTwo}>
                  {props.typeTwo}
                </span>
              </span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default AllPokemonsTwo
