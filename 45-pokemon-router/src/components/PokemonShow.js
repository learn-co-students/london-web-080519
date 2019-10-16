import React from 'react'
import { Card } from 'semantic-ui-react'
import API from '../adapters/API'
import { Link } from 'react-router-dom'

const colorMap = {
  poison: 'purple',
  grass: 'green',
  fire: 'red',
  bug: 'olive',
  electric: 'yellow',
  water: 'blue',
  fairy: 'pink',
  normal: 'grey',
  ground: 'brown',
  fighting: 'teal',
  dragon: 'orange',
  ghost: 'violet'
}

class PokemonShow extends React.Component {
  state = {
    showFront: true
  }

  componentDidMount() {
    API.getPokemon(this.props.match.params.id).then(pokemon =>
      this.setState({ pokemon })
    )
  }

  toggleFrontState = () => this.setState({ showFront: !this.state.showFront })

  render() {
    if (!this.state.pokemon) return <div>loading pokemon data</div>

    const hp = this.state.pokemon.stats.find(stat => stat.name === 'hp')
    const speed = this.state.pokemon.stats.find(stat => stat.name === 'speed')
    const { front, back } = this.state.pokemon.sprites
    const color = colorMap[this.state.pokemon.types[0]] || 'black'

    return (
      <Card onClick={this.toggleFrontState} color={color}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.showFront ? front : back} />
          </div>
          <div className="content">
            <div className="header">{this.state.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value}
            </span>
            <span>
              <i className="icon lightning yellow" />
              {speed.value}
            </span>
          </div>
          <Link to="/pokemon">Back to index</Link>
        </div>
      </Card>
    )
  }
}

export default PokemonShow
