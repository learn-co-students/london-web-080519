import React from 'react'
import logo from './logo.svg'
import './App.css'
import { routes } from './config/routes'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import { Container, Message } from 'semantic-ui-react'
import API from './adapters/API'

const notFoundMessage = () => <Message negative>NOT FOUND</Message>

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    API.validateUser().then(user => {
      if (user.errors) {
        alert(user.errors)
        this.props.history.push('/login')
      } else {
        this.setState({ user })
      }
    })
  }

  login = user => {
    this.setState({ user }, () => this.props.history.push('/'))
  }

  logout = () => {
    API.logout()
    this.setState({ user: null })
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">
        <NavBar routes={routes} user={this.state.user} />
        <Container>
          {routes.map(route => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={routerProps =>
                route.component ? (
                  <route.component
                    {...routerProps}
                    login={this.login}
                    logout={this.logout}
                  />
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
}

export default App
