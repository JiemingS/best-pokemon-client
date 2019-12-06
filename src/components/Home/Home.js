import React from 'react'
import BottomNavi from '../Shared/BottomNavi.js'
import YouTube from 'react-youtube'
import './Home.scss'

const Home = (props) => {
  const [value, setValue] = React.useState(-1)
  console.log('props', props)
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  const videoOnReady = (event) => {
    event.target.pauseVideo()
  }
  // https://www.youtube.com/watch?v=QWGGtKgalDo&feature=youtu.be

  if (props.user !== null) {
    return (
      <div>
        <BottomNavi
          value={value}
          setValue={setValue}
        />
        <YouTube
          videoId="QWGGtKgalDo"
          opts={opts}
          onReady={videoOnReady}
        />
      </div>
    )
  } else {
    return (
      <div>
        <div className="youtubeVideo">
          <YouTube
            videoId="QWGGtKgalDo"
            opts={opts}
            onReady={videoOnReady}
          />
        </div>
        <h1 className="page-main-title push-1">
          Welcome to the Best-Pokémon!
        </h1>
        <h3 className="page-main-title push-1">
          How about get more informations after sign in ~
        </h3>
        <div className="imgBelowYoutube">
          <img src="https://assets.pokemon.com/static2/_ui/img/account/pokemon-login.png" alt="Characters" />
        </div>
      </div>
    )
  }
}

export default Home
