/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example05/CreateCampaigns
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled from 'styled-components'

import Form from 'UI/Form'
import Button from 'UI/Button'
import CreateCampaignForm from './CreateCampaignForm'
import CreatePromotionForm from './CreatePromotionForm'


class CreateCampaign extends Component {
  constructor(props) {
    super(props)

    const promotionId = 1

    this.defaultState = {
      showResult: false,
      promotionId,
      campaignData: {
        name: '',
        codition: '',
      },
      promotionData: [{
        id: promotionId,
        name: '',
        detail: '',
      }],
    }

    this.state = { ...this.defaultState }
  }

  render() {
    const { showResult, promotionData } = this.state
    const outputData = { ...this.state }
    delete outputData.showResult


    const promotionForms = promotionData.map((item, index) => (
      <CreatePromotionForm
        key={`promotion-${index}`}
        id={item.id}
        onClickAdd={this.handleOnAddPromotion}
        onClickDelete={this.handleOnDeletePromotion}
      />
    ))


    return (
      <Form onSubmit={(e) => e.preventDefault()}>
        <CreateCampaignForm />
        {promotionForms}
        <Button
          bgColor="dodgerblue"
          color="white"
          onClick={this.handleOnSave}
        >
          บันทึก
        </Button>
        <Button
          bgColor="orangered"
          color="white"
          onClick={this.handleOnCancel}
        >
          ยกเลิก
        </Button>
        <DataOutput show={showResult}>
          {JSON.stringify(outputData, null, 2)}
        </DataOutput>
      </Form>
    )
  }


  handleOnAddPromotion = () => {
    const promotionData = [ ...this.state.promotionData ]
    const nextId = this.state.promotionId + 1


    promotionData.push({
      id: nextId,
      name: '',
      detail: '',
    })

    this.setState({
      showResult: false,
      promotionId: nextId,
      promotionData,
    })
  }

  handleOnDeletePromotion = (id) => {
    const promotionData = this.state.promotionData.filter((item) => (
      item.id !== id ? item : null
    ))

    this.setState({ showResult: false, promotionData })
  }


  handleOnSave = (event) => {
    event.preventDefault()

    this.setState({ showResult: true })
  }

  handleOnCancel = (event) => {
    event.preventDefault()

    this.setState({ ...this.defaultState })
  }
}

export default CreateCampaign


const DataOutput = styled.pre`
  display: ${props => props.show ? 'block' : 'none'};
  margin: 40px 0 0 0;
  padding: 20px;
  background-color: #333;
  color: beige;
  font-size: 16px;
`
