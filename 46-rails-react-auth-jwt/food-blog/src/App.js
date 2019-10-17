import React from 'react'
import logo from './logo.svg'
import './App.css'
import { routes } from './config/routes'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import { Container, Message } from 'semantic-ui-react'

const notFoundMessage = () => <Message warning>NOT FOUND</Message>

function App() {
  return (
    <div className="App">
      <NavBar routes={routes} />
      <Container>
        {routes.map(route => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={routerProps =>
              route.component ? (
                <route.component {...routerProps} />
              ) : (
                notFoundMessage()
              )
            }
          />
        ))}
      </Container>
    </div>
  )
}

export default App
