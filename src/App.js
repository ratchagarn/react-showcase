import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import Layout from 'UI/Layout'
import NoMatch from 'features/NoMatch'

import routes from 'config/routes'


injectGlobal([`
  html {
    height: 100%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif
  }

  a {
    color: blue;

    &:hover {
      color: red;
      text-decoration: none;
    }
  }
`])


class App extends Component {
  render() {
    return (
      <Router>
        <Layout routes={routes}>
          <Switch>
            {routes.map((route) => (
              <Route
                key={`page-${route.name}`}
                path={route.path}
                exact={route.exact}
                component={route.component} />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App
