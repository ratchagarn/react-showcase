/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example03
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled from 'styled-components'

import LayoutExamplePage from 'UI/LayoutExamplePage'
import FetchJndWebApiData from 'modules/FetchJndWebApiData'

import Campaigns from './Campaigns'


class Example03 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedPage: 1,
      currentApiUrl: '',
    }
  }

  render() {
    const { selectedPage, currentApiUrl } = this.state
    const params = {
      page: selectedPage,
    }

    return (
      <LayoutExamplePage title="Example 03 - Pagination" sourceName="Example03">
        <CurrentApiUrl>
          Current API URL:
          <span>{currentApiUrl}</span>
        </CurrentApiUrl>
        <FetchJndWebApiData
          path="campaigns"
          params={params}
          delay={250}
          onSuccess={this.handleOnSuccess}
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

  handleOnSuccess = (response) => {
    const { path, current_page } = response.data.meta

    this.setState({
      currentApiUrl: `${path}?page=${current_page}`
    })
  }

  handleOnPageChange = (data) => {
    const { selected } = data
    this.setState({ selectedPage: selected + 1 })
  }
}

export default Example03


const CurrentApiUrl = styled.div`
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: bold;

  > span {
    margin-left: 4px;
    color: purple;
    font-weight: normal;
    user-select: none;
  }
`
