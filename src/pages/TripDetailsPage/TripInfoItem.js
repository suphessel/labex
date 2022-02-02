import React from 'react'


const TripInfoItem = (props) => {
  return <div>
    <strong>{props.infoName}</strong>: {props.info}
  </div>
}

export default TripInfoItem