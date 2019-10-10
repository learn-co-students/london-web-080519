import React, { Component } from 'react'

class StockTicker extends Component {

  constructor() {
    super()
    console.log(this.__proto__.constructor.name, "constructor")
    this.state = {
      stockPrice: 50,
      colour: "green"
    }
  }
  
  componentDidMount() {
    console.log(this.__proto__.constructor.name, "did mount")
    this.timer = setInterval(this.getRandomNumber, 2000)
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log(this.__proto__.constructor.name, "did update")
    if (prevState.stockPrice !== this.state.stockPrice) {
      this.setState({ colour: this.checkNumbers(prevState.stockPrice) })
    }
  }

  componentWillUnmount() {
    console.log(this.__proto__.constructor.name, "will unmount")
    clearInterval(this.timer)
  }

  checkNumbers = oldPrice => oldPrice > this.state.stockPrice ? "red" : "green"

  getRandomNumber = () => this.setState({ stockPrice: Math.round(Math.random() * 99)})

  render () {
    console.log(this.__proto__.constructor.name, "render")
    
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>{this.props.company}</h2>
          <div className={this.state.colour} >
            {this.state.stockPrice}
          </div>
          <button onClick={this.props.deleteFunction}>X</button>
        </div>
      </div>
    )
  }
}

export default StockTicker
