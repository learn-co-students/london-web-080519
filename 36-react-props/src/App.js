import React, { Component } from 'react';
import './App.css';
import artworks from './artworks'
import ArtworkList from './ArtworkList';
import Header from './Header';
import SearchForm from './SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm buttonText="Search this term" onSearch={(event) => console.log('search button clicked in app')} />
        <ArtworkList artworks={artworks.filter(a => a.votes < 20)} />
      </div>
    );
  }
}

export default App;
