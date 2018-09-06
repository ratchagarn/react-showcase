/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example01
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled from 'styled-components'

import LayoutExamplePage from 'UI/LayoutExamplePage'


class Example01 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rows: 0,
      params: {
        campaigns: [],
      }
    }
  }

  render() {
    const { rows } = this.state
    const fields = []

    for (let i = 1, len = rows; i <= len; i++) {
      fields.push(<InputBlock key={`field-${i}`} title={`field ${i}`} />)
    }

    return (
      <LayoutExamplePage title="Example 01" sourceName="Example01">
        <button onClick={this.handleOnAddCampaigns}>Add Campaigns</button>
        <Wrapper>
          {fields}
        </Wrapper>
        <br />
        <button onClick={this.handleOnAddField}>Add new field</button>
      </LayoutExamplePage>
    )
  }

  handleOnAddCampaigns = () => {
    const campaigns = [ ...this.state.params.campaigns ]
    campaigns.push({
      type: `Type - ${campaigns.length + 1}`,
      name: `Name - ${campaigns.length + 1}`,
    })
    
    this.setState({
      params: {
        campaigns,
      }
    }, () => {
      console.log(this.state.params.campaigns)
    })
  }

  handleOnAddField = () => {
    this.setState({ rows: this.state.rows + 1 })
  }
}

export default Example01


const InputBlock = ({ title, onChange }) => (
  <InputBlockContainer>
    <Label>{title}</Label>
    <input type="text" onChange={onChange} />
  </InputBlockContainer>
)


const Wrapper = styled.div`
  padding: 20px;
  border: 1px dashed #CCC;
`

const InputBlockContainer = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
`
