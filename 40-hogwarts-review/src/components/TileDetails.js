import React from 'react'

const TileDetails = (props) => {
  return (
    <div>
      <p>Specialty: {props.hog.specialty}</p>
      <p>Weight: {props.hog.weight}</p>
      <p>Highest Medal Achieved: {props.hog["highest medal achieved"]} </p>
      <p>Greased: {props.hog.greased ? "Yes" : "No"}</p>
    </div>
  )
} 

export default TileDetails