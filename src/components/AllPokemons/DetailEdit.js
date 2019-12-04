import React from 'react'
import BottomNavi from '../Shared/BottomNavi.js'
import DetailEditOne from './DetailEditOne.js'
import { withRouter } from 'react-router-dom'

const DetailEdit = (props) => {
  const [value, setValue] = React.useState(2)
  console.log('edit props', props)

  return (
    <div>
      <BottomNavi
        value={value}
        setValue={setValue}
      />
      <DetailEditOne alert={props.alert} user={props.user} id={props.match.params.id}/>
    </div>
  )
}

export default withRouter(DetailEdit)
