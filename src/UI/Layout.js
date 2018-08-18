import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const menu = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Case 01',
    path: '/case01',
  },
]

const Layout = ({ children }) => {
  const menuList = menu.map((item, i) => (
    <Menu.Item key={`menu-item-${i}`}>
      <Link to={item.path}>{item.name}</Link>
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
  padding: 10px;
  list-style: none;

  > a {
    display: block;
    color: blue;
    text-decoration: none;

    &:hover {
      color: red;
      text-decoration: underline;
    }
  }
`
