import React, { useState, useEffect }from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

const BotsPage = () => {
  //start here with your code for step one

const [ bots, setBots ] = useState([])
const [ botArmy, setBotArmy ] = useState([])
const [ selectedBot, setSelectedBot ] = useState(null)

useEffect(
  () => {
    fetch(API)
    .then(resp => resp.json())
    .then(bots => setBots(bots))
}, [])

const enlistBot = bot => {
   if (!botArmy.includes(bot)) {
    setBotArmy([...botArmy, bot])
   } else {
     alert("Bot is already in your army!")
   }
}

const dischargeBot = bot => setBotArmy(botArmy.filter(armybot => armybot !== bot))

    return (
      <div>
        <YourBotArmy bots={botArmy} dischargeBot={dischargeBot}/>
        { selectedBot ?
        <BotSpecs bot={selectedBot} enlistBot={enlistBot} setSelectedBot={setSelectedBot}/> :
        <BotCollection bots={bots} setSelectedBot={setSelectedBot}/>
        }
      </div>
    );

}

export default BotsPage;
