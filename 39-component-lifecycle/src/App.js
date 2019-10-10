import React, { Component } from 'react';
import WidgetSelector from './components/WidgetSelector'
import RandomKoala from './components/RandomKoala'

class App extends Component {

  constructor() {
    super()
    console.log(this.__proto__.constructor.name, "constructor")
    this.state = {
      koala: {},
      showStockTicker: true
    }
  }
  
  componentDidMount() {
    console.log(this.__proto__.constructor.name, "did mount")
    fetch("http://localhost:3000/koalas")
    .then(resp => resp.json())
    .then(koalas => this.setState({ koala: koalas[0]}))
  }
  
  componentDidUpdate() {
    console.log(this.__proto__.constructor.name, "did update")
  }

  componentWillUnmount() {
    console.log(this.__proto__.constructor.name, "will unmount")
  }

  toggleWidgets = () => this.setState({ showStockTicker: !this.state.showStockTicker })


//  Uncomment the Widget Selector and the Comment Out the Random Koala to explore the different features
  render() {
    console.log(this.__proto__.constructor.name, "render")
    return (
      <div id='app'>
        {/* <RandomKoala koala={this.state.koala}/> */}
        <WidgetSelector showStockTicker={this.state.showStockTicker} toggleWidgets={this.toggleWidgets} />
      </div>
    )
  }
}

export default App;


