import piggy from '../porco.png'
import React from 'react'
import { Header, Item, Image } from 'semantic-ui-react'

const Nav = () => {
  return (
    <Item.Group>
      <Item>
        <Item.Image floated="left" size="small" src={piggy} alt="piggy" />
        <Item.Content verticalAlign="middle">
          <Item.Header as="h1">Hogwarts</Item.Header>
          <Item.Meta>
            <span>A React App for County Fair Hog Fans</span>
          </Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default Nav
