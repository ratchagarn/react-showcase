import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import Layout from 'UI/Layout'
import Home from 'features/Home'
import Case01 from 'features/Case01'


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
    font-family: Arial, Helvetica, sans-serif
  }
`])


class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/case01" component={Case01} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App
