import React from 'react'
import { connect } from 'react-redux'

import ACTION_TYPES from '../actionTypes'

import BotCard from '../components/BotCard'

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              clickFunction={this.props.selectBot}
            />
          ))}
          Collection of all bots
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    selectedBot: state.bots.find(b => b.id === state.selectedBot)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    deselectBot: () => dispatch({ type: ACTION_TYPES.DESELECT_BOT }),
    selectBot: bot =>
      dispatch({ type: ACTION_TYPES.SELECT_BOT, payload: { botId: bot.id } })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BotCollection)
