import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const menu = [
  {
    name: 'Home',
    path: '/',
    exact: true,
  },
  {
    name: 'Example 01',
    path: '/example01',
  },
]

const Layout = ({ children }) => {
  const menuList = menu.map((item, i) => (
    <Menu.Item key={`menu-item-${i}`}>
      <NavLink exact={item.exact} to={item.path}>{item.name}</NavLink>
    </Menu.Item>
  ))

  return (
    <Container>
      <Sidebar>
        <MenuTitle>Menu</MenuTitle>
        <Menu>
          {menuList}
        </Menu>
      </Sidebar>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Layout


const Container = styled.div`
  position: relative;
`

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  padding: 20px;
  background-color: #EFEFEF;
`

const Content = styled.div`
  width: calc(100% - 200px);
  margin-left: 200px;
`

const MenuTitle = styled.h3`
  margin: 0 0 20px 0;
`

const Menu = styled.ul`
  margin: 0;
  padding: 0;
`

Menu.Item = styled.li`
  padding: 5px;
  list-style: none;

  > a {
    display: block;
    color: #333;
    font-size: 14px;
    text-decoration: none;
    transition: .2s;

    &.active {
      font-weight: bold;
    }

    &:hover {
      color: #666;
      text-decoration: underline;
    }
  }
`
