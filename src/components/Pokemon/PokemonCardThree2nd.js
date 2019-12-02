import React from 'react'
import './PokemonCardThree2nd.scss'
import Slider from 'react-slick'
// import Article from './PokemonCardThree3rd'

// const News = (props) => {
//   const data = props.data
//   let newsTemplate = null
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   }
//   if (data.length > 0) {
//     newsTemplate = data.map(function (item, index) {
//       return (
//         <div key={index}>
//           <Article data={item} />
//         </div>
//       )
//     })
//   } else {
//     newsTemplate = <p>Please add some cards</p>
//   }
//   return (
//     <div className='news'>
//       <Slider {...settings}>{newsTemplate}</Slider>
//       <strong className={'news__count ' + (data.length > 0 ? '' : 'none') }>
//         Total cards: {data.length}
//       </strong>
//     </div>
//   )
// }

class SimpleSlider extends React.Component {
  shouldComponentUpdate (nextProps) {
    // TODO: add proper implementation that compares objects
    return false
  }

  render () {
    console.log('slider render')
    return (
      <Slider {...this.props.settings}>
        <div><div className="slide-0"><h3>Graph 1</h3></div></div>
        <div><div className="slide-1"><h3>Graph 2</h3></div></div>
        <div><div className="slide-2"><h3>Graph 3</h3></div></div>
        <div><div className="slide-3"><h3>Set Up</h3></div></div>
      </Slider>
    )
  }
}

export default SimpleSlider
