import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'

import Container from 'UI/Container'
import Case01 from 'features/Case01'

injectGlobal([`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: Arial, Helvetica, sans-serif
  }
`])


class App extends Component {
  render() {
    return (
      <Container>
        <Case01 />
      </Container>
    )
  }
}

export default App
