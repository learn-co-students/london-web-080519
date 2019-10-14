import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi key={sushi.id} {...sushi} handleClick={() => props.eatSushi(sushi)} plates={props.plates}/>)
        }
        <MoreButton getMoreSushi={props.getMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer