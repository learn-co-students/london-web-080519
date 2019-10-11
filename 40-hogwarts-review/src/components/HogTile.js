import React from 'react'
import TileDetails from './TileDetails'

class HogTile extends React.Component {

  state = {
    showDetails: false
  }

  getImageSlug = name => name.replace(/\s/g, "_").toLowerCase()

  toggleDetails = () => this.setState({ showDetails: !this.state.showDetails })
    
  render() {
    return (
      <div onClick={this.toggleDetails} className="ui eight wide column">
        <h3>{this.props.hog.name}</h3>
        <img src={require(`../hog-imgs/${this.getImageSlug(this.props.hog.name)}.jpg`)} alt={this.props.hog.name}></img>
        {this.state.showDetails ? <TileDetails hog={this.props.hog}/> : null}
      </div>
    )
  }
}

export default HogTile