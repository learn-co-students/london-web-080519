import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

state = {
    bots: [],
    botArmy: [],
    selectedBot: null
  }

componentDidMount() {
  fetch(API)
  .then(resp => resp.json())
  .then(bots => this.setState({ bots }))
}

enlistBot = bot => {
   if (!this.state.botArmy.includes(bot)) {
    this.setState({ botArmy: [...this.state.botArmy, bot]})
   } else {
     alert("Bot is already in your army!")
   }
}

dischargeBot = bot => this.setState({ botArmy: this.state.botArmy.filter(armybot => armybot !== bot)})

selectBot = bot => this.setState({ selectedBot: bot })

deselectBot = bot => this.setState({ selectedBot: null })

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botArmy} dischargeBot={this.dischargeBot}/>
        { this.state.selectedBot ?
        <BotSpecs bot={this.state.selectedBot} enlistBot={this.enlistBot} deselectBot={this.deselectBot}/> :
        <BotCollection bots={this.state.bots} selectBot={this.selectBot}/>
        }
      </div>
    );
  }

}

export default BotsPage;
