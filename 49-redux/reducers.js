const { combineReducers } = Redux

const defaultState = {
  key: 'press a key',
  counter: 0
}

const counter = (counter = defaultState.counter, action) => {
  if (action.type === ACTION_TYPES.COUNT_UP) return counter + 1
  if (action.type === ACTION_TYPES.COUNT_DOWN) return counter - 1

  return counter
}

const key = (key = defaultState.key, action) => {
  if (action.type === ACTION_TYPES.KEY_PRESS) return action.payload

  return key
}

const combinedReducers = combineReducers({
  counter,
  key
})
