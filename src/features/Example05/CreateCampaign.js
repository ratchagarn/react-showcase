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
      promotionsErrorFields: [[]],
    }

    this.state = { ...this.defaultState }
  }

  render() {
    const {
      showResult,
      campaignName,
      campaignCondition,
      campaignErrorFields,
      promotionsErrorFields,
      promotions,
    } = this.state

    const outputData = { ...this.state }
    delete outputData.showResult


    const promotionForms = promotions.map((data, index) => (
      <CreatePromotionForm
        key={`promotion-${index}`}
        index={index}
        id={data.id}
        data={data}
        errorFields={promotionsErrorFields[index]}
        onClickAdd={this.handleOnAddPromotion}
        onClickDelete={this.handleOnDeletePromotion}
        onInputChange={this.handleOnPromotionsInputChange}
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


  handleOnPromotionsInputChange = (event, index) => {
    const { name, value } = event.target
    const promotions = [ ...this.state.promotions ]

    promotions[index][name] = value

    this.setState({ promotions })
  }


  handleOnAddPromotion = () => {
    const promotions = [ ...this.state.promotions ]
    const promotionsErrorFields = [ ...this.state.promotionsErrorFields ]
    const nextId = this.state.promotionId + 1


    promotions.push({
      id: nextId,
      name: '',
      detail: '',
    })

    promotionsErrorFields.push([])

    this.setState({
      showResult: false,
      promotionId: nextId,
      promotions,
      promotionsErrorFields,
    })
  }

  handleOnDeletePromotion = (id, index) => {
    if (this.state.promotions.length === 1) {
      alert('ไม่สามารถทำการลบได้ เนื่องจากต้องมีอย่างน้อย 1 โปรโมชั่น')
      return
    }

    const promotions = this.state.promotions.filter((item) => (
      item.id !== id ? item : null
    ))

    const promotionsErrorFields = [ ...this.state.promotionsErrorFields ]
    promotionsErrorFields.splice(index, 1)

    this.setState({
      showResult: false,
      promotions,
      promotionsErrorFields
    })
  }


  handleOnSave = (event) => {
    event.preventDefault()

    const campaignErrorFields = this.validateCampiagnData()
    const promotionsErrorFields = this.validatePromotionsData()

    if (campaignErrorFields.length > 0 || promotionsErrorFields.length > 0) {
      window.scrollTo(0, 0)
    }

    const findPromotionsErrors = promotionsErrorFields.filter((error) => (
      error.length > 0
    ))

    this.setState({
      showResult: true,
      campaignErrorFields,
      promotionsErrorFields,
    }, () => {
      if (campaignErrorFields.length === 0 &&
          findPromotionsErrors.length === 0) {
        alert('บันทึกข้อมูลเรียบร้อย !!')
      }
    })
  }

  handleOnCancel = (event) => {
    event.preventDefault()

    this.setState({ ...this.defaultState })
  }

  validateCampiagnData = () => {
    const campaignErrorFields = [ ...this.state.campaignErrorFields ]

    const campaignFields = [
      'campaignName',
      'campaignCondition'
    ]

    campaignFields.forEach((name) => {
      const findIndex = campaignErrorFields.indexOf(name)

      if (this.state[name] === '' && findIndex === -1) {
        campaignErrorFields.push(name)
      }
      else if (this.state[name] !== '' && findIndex > -1) {
        campaignErrorFields.splice(findIndex, 1)
      }
    })

    return campaignErrorFields
  }

  validatePromotionsData = () => {
    const { promotions } = this.state
    const promotionsErrorFields = [ ...this.state.promotionsErrorFields ]
    const promotionFields = ['name', 'detail']

    promotions.forEach((promotion, i) => {
      promotionFields.forEach((name) => {
        const findIndex = promotionsErrorFields[i].indexOf(name)

        if (promotion[name] === '' && findIndex === -1) {
          promotionsErrorFields[i].push(name)
        }
        else if (promotion[name] !== '' && findIndex > -1) {
          promotionsErrorFields[i].splice(findIndex, 1)
        }
      })
    })

    return promotionsErrorFields
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
