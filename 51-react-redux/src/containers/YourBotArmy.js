import React from 'react'
import { connect } from 'react-redux'
import BotCard from '../components/BotCard'
import ACTION_TYPES from '../actionTypes'

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot}
                clickFunction={this.props.dischargeBot}
              />
            ))}
            Your Bot Army
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bots: state.botArmy.map(botId => state.bots.find(b => b.id === botId))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dischargeBot: bot =>
      dispatch({ type: ACTION_TYPES.DISCHARGE_BOT, payload: { botId: bot.id } })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourBotArmy)
