import React from 'react'
import './PokemonCardThree3rd.scss'

const Article = (props) => {
  const image = props.data.image
  const title = props.data.title
  const subtitle = props.data.subtitle
  return (
    <figure className="snip1584">
      <img src={image} />
      <figcaption>
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
      </figcaption><a href="#"></a>
    </figure>
  )
}

export default Article
