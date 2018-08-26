/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example03
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'

import LayoutExamplePage from 'UI/LayoutExamplePage'
import FetchJndWebApiData from 'modules/FetchJndWebApiData'

import Campaigns from './Campaigns'


class Example03 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedPage: 1,
    }
  }

  render() {
    const { selectedPage } = this.state
    const params = {
      page: selectedPage,
    }

    return (
      <LayoutExamplePage title="Example 03 - Pagination" sourceName="Example03">
        <FetchJndWebApiData
          path="campaigns"
          params={params}
          delay={250}
          render={(props) => (
            <Campaigns
              { ...props }
              onPageChange={this.handleOnPageChange}
            />
          )}
        />
      </LayoutExamplePage>
    )
  }

  handleOnPageChange = (data) => {
    const { selected } = data
    this.setState({ selectedPage: selected + 1 })
  }
}

export default Example03
