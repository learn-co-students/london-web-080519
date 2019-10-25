import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'

const Home = () => {
  return (
    <Segment textAlign="center">
      <Header icon>
        <Icon circular name="food" />
        Food blog
      </Header>
    </Segment>
  )
}

export default Home
