/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example03
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
// import styled from 'styled-components'

import LayoutExamplePage from 'UI/LayoutExamplePage'
import FetchJndWebApiData from 'modules/FetchJndWebApiData'

import Campaigns from './Campaigns'


class Example03 extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const params = {
      page: 2,
    }

    return (
      <LayoutExamplePage title="Example 03 - Pagination" sourceName="Example03">
        <FetchJndWebApiData
          path="campaigns"
          params={params}
          render={(props) => <Campaigns { ...props } />}
        />
      </LayoutExamplePage>
    )
  }
}

export default Example03
