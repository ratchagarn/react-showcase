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
      campaignName: '',
      campaignCondition: '',
      campaignErrorFields: [],
      promotionId,
      promotions: [{
        id: promotionId,
        name: '',
        detail: '',
      }],
    }

    this.state = { ...this.defaultState }
  }

  render() {
    const {
      showResult,
      campaignName,
      campaignCondition,
      campaignErrorFields,
      promotions,
    } = this.state

    const outputData = { ...this.state }
    delete outputData.showResult


    const promotionForms = promotions.map((item, index) => (
      <CreatePromotionForm
        key={`promotion-${index}`}
        id={item.id}
        onClickAdd={this.handleOnAddPromotion}
        onClickDelete={this.handleOnDeletePromotion}
      />
    ))


    return (
      <Form onSubmit={(e) => e.preventDefault()}>
        <CreateCampaignForm
          errorFields={campaignErrorFields}
          campaignName={campaignName}
          campaignCondition={campaignCondition}
          onInputChange={this.handleOnCampaignInputChange}
        />
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

  handleOnCampaignInputChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }


  handleOnAddPromotion = () => {
    const promotions = [ ...this.state.promotions ]
    const nextId = this.state.promotionId + 1


    promotions.push({
      id: nextId,
      name: '',
      detail: '',
    })

    this.setState({
      showResult: false,
      promotionId: nextId,
      promotions,
    })
  }

  handleOnDeletePromotion = (id) => {
    if (this.state.promotions.length === 1) {
      alert('ไม่สามารถทำการลบได้ เนื่องจากต้องมีอย่างน้อย 1 โปรโมชั่น')
      return
    }

    const promotions = this.state.promotions.filter((item) => (
      item.id !== id ? item : null
    ))

    this.setState({ showResult: false, promotions })
  }


  handleOnSave = (event) => {
    event.preventDefault()

    const campaignErrorFields = [ ...this.state.campaignErrorFields ]

    const campaignFields = [
      'campaignName',
      'campaignCondition'
    ]

    campaignFields.forEach((name) => {
      const index = campaignErrorFields.indexOf(name)

      if (this.state[name] === '' && index === -1) {
        campaignErrorFields.push(name)
      }
      else {
        campaignErrorFields.splice(index, 1)
      }
    })

    if (campaignErrorFields.length > 0) {
      this.setState({ campaignErrorFields })
    }

    if (campaignErrorFields.length > 0) {
      window.scrollTo(0, 0)
    }

    this.setState({
      showResult: campaignErrorFields.length === 0,
      campaignErrorFields,
    })
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
