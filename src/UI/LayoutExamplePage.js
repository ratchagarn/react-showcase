import React from 'react'

import Container from 'UI/Container'
import PageTitle from 'UI/PageTitle'
import ViewSource from 'UI/ViewSource'


const LayoutExamplePage = ({ title, sourceName, children }) => (
  <Container>
    <PageTitle>{title}</PageTitle>
    <ViewSource name={sourceName} />
    {children}
  </Container>
)

export default LayoutExamplePage
