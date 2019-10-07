import React from "react";

const Header = (props) => {
  console.log(props)
  return <h2>{props.innerText}</h2>
}


export default () => (
  <>
    <Header innerText="my react app" />
    <p>Hard to get more minimal than this React app.</p>
  </>
);
