import React, { Component } from 'react';
import './App.css';
import artworks from './artworks'
import ArtworkList from './ArtworkList';
import Header from './Header';
import SearchForm from './SearchForm';

const SORT_TYPES = {
  default: 'Default',
  alpha: 'A-Z',
  votes: 'Votes'
}

class App extends Component {

  state = {
    searchTerm: '',
    artworks: [...artworks],
    sortType: SORT_TYPES.default
  }

  handleSearch = (searchTerm) => {
    this.setState({
      searchTerm
    })
  }

  filteredArtworks = () => {
    return this.state.artworks.filter(art => art.title.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()))
  }

  sortArtworks = (artworks) => {
    if (this.state.sortType === SORT_TYPES.default) return artworks
    if (this.state.sortType === SORT_TYPES.alpha) return artworks.sort((a, b) => a.title.localeCompare(b.title))
    if (this.state.sortType === SORT_TYPES.votes) return artworks.sort((a, b) => b.votes - a.votes)
  }

  upvote = (artworkId) => {
    this.setState({
      artworks: this.state.artworks.map(artwork => {
        if (artwork.id !== artworkId) return artwork

        artwork.votes = artwork.votes + 1

        return artwork
      })
    })
  }

  render() {

    const filteredArtworks = this.filteredArtworks()
    const filteredAndSortedArtworks = this.sortArtworks(filteredArtworks)

    return (
      <div className="App">
        <Header />
        <SearchForm buttonText="Search this term" onSearch={this.handleSearch} />
        <div>
          {
            Object.values(SORT_TYPES).map(type => <button onClick={() => this.setState({ sortType: type })}>{type}</button>)
          }
        </div>
        <ArtworkList upvote={this.upvote} artworks={filteredAndSortedArtworks} />
      </div>
    );
  }
}

export default App;
