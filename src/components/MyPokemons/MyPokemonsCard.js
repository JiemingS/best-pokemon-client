import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './MyPokemonsCard.scss'

const MyPokemonsCard = (props) => {
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
      <Card className='pokedexTwoBorder pikapika' as={'a'} href='#pokemons'>
        <Card.Img variant="top" className="pokedexTwoImg" src={props.url} alt="This is not an imgUrl"/>
        <Card.Body>
          <Card.Text>
            <span className='pokedexTwoName'>
              <strong>
                {props.name}
              </strong>
            </span>
          </Card.Text>
          <Card.Text className='pokedexTwoType'>
            <span className={props.typeOne}>
              {props.typeOne}
            </span>
              &
            <span className={props.typeTwo}>
              {props.typeTwo}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default MyPokemonsCard
