import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import HogList from "./components/HogList";
import Options from "./components/Options"

class App extends Component {

  state = {
    hogs: [],
    viewGreased: false,
    sortType: 'default'
  }

  componentDidMount() {
    fetch('http://localhost:3000/hogs')
    .then(resp => resp.json())
    .then(hogs => this.setState({ hogs: hogs}))
  }

  toggleGreased = () => this.setState({ viewGreased: !this.state.viewGreased })

  changeSortType = event => this.setState({ sortType: event.target.value }) 

  filterHogs = () => this.state.hogs.filter(hog => {
    return hog.greased === true || this.state.viewGreased === false
  })

  sortHogs = (filteredHogs) => {
    if (this.state.sortType === 'default') {
      return filteredHogs
    } else if (this.state.sortType === "weight") {
      return filteredHogs.sort((a,b) => b.weight - a.weight)
    } else if (this.state.sortType === "name") {
      return filteredHogs.sort((a,b) => a.name.localeCompare(b.name))
    }
  } 

  render() {
    const hogsToRender = this.sortHogs(this.filterHogs())
    return (
      <div className="App">
        <Nav />
        <Options viewGreased={this.state.viewGreased} toggleGreased={this.toggleGreased} changeSortType={this.changeSortType}/>
        <HogList hogs={hogsToRender} />
      </div>
    );
  }
}

export default App;
