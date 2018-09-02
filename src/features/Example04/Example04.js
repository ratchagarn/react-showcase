/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example04
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import LayoutExamplePage from 'UI/LayoutExamplePage'


class Example04 extends Component {
  render() {
    return (
      <LayoutExamplePage title="Example 04" sourceName="Example04">
        <h1>Currect locale is <span style={{ color: 'red' }}>{this.props.locale}</span></h1>
      </LayoutExamplePage>
    )
  }
}

export default connect((state) => ({ ...state }))(Example04)
