/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example05
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'

import LayoutExamplePage from 'UI/LayoutExamplePage'
import CreateCampaign from './CreateCampaign'


class Example04 extends Component {
  render() {
    return (
      <LayoutExamplePage title="Example 05 - Validate form" sourceName="Example05">
        <CreateCampaign />
      </LayoutExamplePage>
    )
  }
}

export default Example04
