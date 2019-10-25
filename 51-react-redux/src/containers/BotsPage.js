import React from 'react'
import { connect } from 'react-redux'
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'
import ACTION_TYPES from '../actionTypes'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(bots => this.props.setBots(bots))
  }

  render() {
    const selectedBot = this.props.bots.find(
      bot => bot.id === this.props.selectedBot
    )
    return (
      <div>
        <YourBotArmy />
        {selectedBot ? (
          <BotSpecs bot={selectedBot} />
        ) : (
          <BotCollection bots={this.props.bots} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedBot: state.selectedBot,
    bots: state.bots
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBots: bots =>
      dispatch({ type: ACTION_TYPES.SET_BOTS, payload: { bots } })
  }
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connectedComponent(BotsPage)
