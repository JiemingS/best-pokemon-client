import React from 'react'
import { Bar } from 'react-chartjs-2'

const LeftChart = (props) => {
  // console.log('LeftChart props', props)
  return (
    <div className='chart'>
      <Bar
        data={props.data}
        width={100}
        height={50}
        options={{
          // maintainAspectRatio: false
          title: {
            display: true,
            text: 'Pokemon Stats',
            fontSize: 25
          },
          legend: {
            display: false,
            position: 'top'
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontSize: 20
              }
            }],
            xAxes: [{
              ticks: {
                fontSize: 20
              }
            }]
          }
        }}
      />
    </div>
  )
}

export default LeftChart
