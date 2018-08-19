/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Feature - NoMatch
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import styled from 'styled-components'

import Container from 'UI/Container'


const NoMatch = () => (
  <Container>
    <Message>The page you are looking could not be found.</Message>
  </Container>
)

export default NoMatch


const Message = styled.p`
  margin: 0;
  font-size: 20px;
`
