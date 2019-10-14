import React, { Fragment } from 'react'

const Sushi = (props) => {

  const eaten = props.plates.find(sushi => sushi.id === props.id)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={props.handleClick}>
        { 
          /* Tell me if this sushi has been eaten! */ 
           eaten ?
            null
          :
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi