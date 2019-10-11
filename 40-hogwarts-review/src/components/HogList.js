import React from 'react'
import HogTile from './HogTile'

const HogList = (props) => {
  return(
    <div className="ui grid container">
      {props.hogs.map(hog => <HogTile key={hog.id} hog={hog} />)}
    </div>
  )
}

export default HogList