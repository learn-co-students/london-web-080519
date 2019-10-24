const renderPageFromState = state => {
  const counterSpan = document.getElementById('counter-value')
  counterSpan.innerText = state.counter
  const keySpan = document.getElementById('key-value')
  keySpan.innerText = state.key
}
