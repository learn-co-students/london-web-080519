import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    index: 0,
    plates: [],
    balance: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({ sushis }))
  }

  getMoreSushi = () => {
    let newIndex = this.state.index + 4
    if (newIndex + 4 > this.state.sushis.length ){
      newIndex = 0
    }
    this.setState({ index: newIndex})
  }

  eatSushi = sushi => {
    if (this.state.balance >= sushi.price) {
      this.setState({
      plates: [...this.state.plates, sushi],
      balance: this.state.balance - sushi.price
      })
  } else {
    alert("No Sushi for you!")
  }
}

  render() {
    const selection = this.state.sushis.slice(this.state.index, this.state.index + 4)
    return (
      <div className="app">
        <SushiContainer sushis={selection} getMoreSushi={this.getMoreSushi} eatSushi={this.eatSushi} plates={this.state.plates} />
        <Table balance={this.state.balance} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;