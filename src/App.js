import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import Layout from 'UI/Layout'

import Home from 'features/Home'
import Example01 from 'features/Example01'
import NoMatch from 'features/NoMatch'


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
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/example01" component={Example01} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App
