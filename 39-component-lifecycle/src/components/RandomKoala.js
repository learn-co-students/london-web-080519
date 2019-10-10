import React, { Component } from 'react'

class RandomKoala extends Component {

  constructor() {
    super()
    console.log(this.__proto__.constructor.name, "constructor")
  }
  
  componentDidMount() {
    console.log(this.__proto__.constructor.name, "did mount")
  }
  
  componentDidUpdate() {
      console.log(this.__proto__.constructor.name, "did update")
  }

  componentWillUnmount() {
    console.log(this.__proto__.constructor.name, "will unmount")
  }

  render () {
    console.log(this.__proto__.constructor.name, "render")
    return (
      <div className="app-children">
        <h3>Random Koala</h3>
        {this.props.koala.image_url ? 
        <img src={this.props.koala.image_url} alt="random but not random koala"></img> :
        <p>Fetching a koala, hang in there..</p>}
      </div>
    )
  }
}

export default RandomKoala