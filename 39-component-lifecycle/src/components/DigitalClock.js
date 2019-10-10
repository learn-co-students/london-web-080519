import React, { Component } from 'react'

class DigitalClock extends Component {

  constructor() {
    super()
    console.log(this.__proto__.constructor.name, "constructor")
    this.state = {
      time: new Date()
    }
  }
  
  componentDidMount() {
    console.log(this.__proto__.constructor.name, "did mount")
    this.timer = setInterval(this.setTime , 1000)
  }
  
  componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "did update")
  }

  componentWillUnmount() {
    console.log(this.__proto__.constructor.name, "will unmount")
    clearInterval(this.timer)
  }

  setTime = () => this.setState({ time: new Date()})

  getTimeString = () => `${this.hours()}:${this.minutes()}:${this.seconds()}`

  // Added the functions below to check whether the number is below 10
  // and add a 0 to the front of it if it needs it, so it looks neater :)
  // I then call each of these inside getTimeString to generate the time string

  hours = () => {
    let h = this.state.time.getHours()
    return h < 10 ? `0${h}` : h
  }

  minutes = () => {
    let m = this.state.time.getMinutes()
    return m < 10 ? `0${m}` : m
  }

  seconds = () => {
    let s = this.state.time.getSeconds()
    return s < 10 ? `0${s}` : s
  }

  render () {
    console.log(this.__proto__.constructor.name, "render")
    const currentTime = this.getTimeString()
    return (
      <div className="app-children">
        <h2 id="digital">
          {currentTime}
        </h2>
      </div>
    )
  }
}

export default DigitalClock
