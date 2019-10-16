import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import PokemonShow from './components/PokemonShow'

const App = () => (
  <div className="App">
    <Route
      exact
      path="/pokemon/:id"
      component={routerProps => <PokemonShow {...routerProps} />}
    />
    <Route exact path="/pokemon">
      <PokemonIndex />
    </Route>
    <Route exact path="/not-allowed">
      <Redirect to="/pokemon" />
    </Route>
    <Route exact path="*">
      <div>404 not foundf</div>
    </Route>
  </div>
)

export default App
