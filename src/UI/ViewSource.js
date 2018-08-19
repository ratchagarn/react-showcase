import React from 'react'
import styled from 'styled-components'


const baseUrl = 'https://github.com/ratchagarn/react-showcase/blob/master/src/features'

const ViewSource = ({ name }) => (
  <Container>
    <Link
      href={`${baseUrl}/${name}/${name}.js`}
      target="_blank">
      View Source
    </Link>
  </Container>
)

export default ViewSource


const Container = styled.div`
  margin-bottom: 20px;
  text-align: right;
`

const Link = styled.a`
  color: #333;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
