import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = ({ routes }) => {
  return (
    <Menu>
      {routes.map(route => (
        <Menu.Item
          key={route.path}
          as={NavLink}
          to={route.path}
          activeClassName="active"
        >
          {route.title}
        </Menu.Item>
      ))}
    </Menu>
  )
}
export default NavBar
