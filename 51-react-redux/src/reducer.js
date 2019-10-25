import ACTION_TYPES from './actionTypes'
import { combineReducers } from 'redux'

const defaultState = {
  bots: [],
  botArmy: [],
  selectedBot: null
}

const selectedBot = (selectedBot = defaultState.selectedBot, action) => {
  if (action.type === ACTION_TYPES.SELECT_BOT) return action.payload.botId
  if (action.type === ACTION_TYPES.DESELECT_BOT) return null
  return selectedBot
}

const bots = (bots = defaultState.bots, action) => {
  if (action.type === ACTION_TYPES.SET_BOTS) return action.payload.bots
  return bots
}

const botArmy = (botArmy = defaultState.botArmy, { type, payload }) => {
  if (type === ACTION_TYPES.ENLIST_BOT && !botArmy.includes(payload.botId))
    return [...botArmy, payload.botId]
  if (type === ACTION_TYPES.DISCHARGE_BOT)
    return botArmy.filter(id => id !== payload.botId)
  return botArmy
}

export default combineReducers({
  selectedBot,
  bots,
  botArmy
})
