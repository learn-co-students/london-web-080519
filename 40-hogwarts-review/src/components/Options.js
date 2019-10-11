import React from 'react'

const Options = (props) => {
  return (
    <div className="options">
      <button onClick={props.toggleGreased}>{props.viewGreased ? "Show All Hogs" : "Show Greased Hogs" }</button>
      <select onChange={props.changeSortType}>
        <option value="default">Default</option>
        <option value="weight">Weight</option>
        <option value="name">Name</option>
      </select>
    </div>
  )

}

export default Options