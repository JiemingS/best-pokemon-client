import React from 'react'
import BottomNavi from '../Shared/BottomNavi.js'
import YouTube from 'react-youtube'

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
      <h1>Why not SIGN IN first</h1>
    )
  }
}

export default Home
