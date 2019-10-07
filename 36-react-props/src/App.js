import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import PaintingsList from './components/PaintingsList';
import Search from './components/Search';

class App extends Component {

  state = {
    searchTerm: ''
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <PaintingsList />
      </div>
    );
  }
}

export default App;
