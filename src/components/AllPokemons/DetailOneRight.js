import React from 'react'

const DetailOneRight = (props) => {
  // console.log('propsOfDetailRight', props)

  const createdAt = props.pokemon.createdAt
  const day = createdAt.split('T').join(', ').split('Z').join(', ').split('.').join(', ').split(', ')[0]
  // const time = createdAt.split('T').join(', ').split('Z').join(', ').split('.').join(', ').split(', ')[1]
  // console.log('createdAt', createdAt)
  // console.log('day', day)
  // console.log('time', time)

  return (
    <div>
      <h1>
        <div className='wantToBeFlexDetail'>
          <div>
            Name:
          </div>
          <div className='wantToHaveSpace'>
            <i><strong>{props.pokemon.name}</strong></i>
          </div>
        </div>
      </h1>

      <h2>
        <div className='wantToBeFlexDetail'>
          <div>
            Height:
          </div>
          <div className='wantToHaveSpace'>
            <i><strong>{props.pokemon.height}cm</strong></i>
          </div>
        </div>
      </h2>

      <h2>
        <div className='wantToBeFlexDetail'>
          <div>
          Owner:
          </div>
          <div className='wantToHaveSpace'>
            <i><strong>{props.pokemon.owner.email}</strong></i>
          </div>
        </div>
      </h2>

      <h2>
        <div className='wantToBeFlexDetail'>
          <div>
          Types:
          </div>
          <div className='wantToHaveSpace'>
            <i><strong>
              {props.pokemon.typeOne}
              <span className='wantToHaveSpace'>
                {props.pokemon.typeTwo}
              </span>
            </strong></i>
          </div>
        </div>
      </h2>

      <h2>
        <div className=''>
          <div>
          Birthday:
          </div>
          <div className='wantToHaveSpace'>
            <i><strong>{day}</strong></i>
          </div>
        </div>
      </h2>
    </div>
  )
}

export default DetailOneRight
