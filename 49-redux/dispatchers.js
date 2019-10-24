const countUp = () => store.dispatch({ type: ACTION_TYPES.COUNT_UP })

// setInterval(countUp, 1000)

document.querySelector('button').addEventListener('click', countUp)

document.addEventListener('keydown', e =>
  store.dispatch({ type: ACTION_TYPES.KEY_PRESS, payload: e.key })
)
