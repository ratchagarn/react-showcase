/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example03
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
// import styled from 'styled-components'

import LayoutExamplePage from 'UI/LayoutExamplePage'
import Pagination from 'UI/Pagination'


class Example03 extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <LayoutExamplePage title="Example 03 - Pagination" sourceName="Example03">
        <Pagination
          pageCount={10}
        />
      </LayoutExamplePage>
    )
  }
}

export default Example03
