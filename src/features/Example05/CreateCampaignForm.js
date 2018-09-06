/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example05/CreateCampaignForm
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import styled from 'styled-components'

import Form from 'UI/Form'


const CreateCampaignForm = ({
  errorFields,
  campaignName,
  campaignCondition,
  onInputChange,
}) => (
  <Container>
    <Form.Block>
      <Form.Label>ชื่อแคมเปญ</Form.Label>
      <Form.Input
        name="campaignName"
        autoComplete="off"
        hasError={errorFields.indexOf('campaignName') > -1}
        value={campaignName}
        onChange={onInputChange}
      />
    </Form.Block>
    <Form.Block>
      <Form.Label>เงื่อนไข</Form.Label>
      <Form.Textarea
        name="campaignCondition"
        autoComplete="off"
        hasError={errorFields.indexOf('campaignCondition') > -1}
        value={campaignCondition}
        onChange={onInputChange}
      />
    </Form.Block>
  </Container>
)

CreateCampaignForm.defaultProps = {
  errorFields: [],
  campaignName: '',
  campaignCondition: '',
  onInputChange: () => {},
}


export default CreateCampaignForm


const Container = styled.div`
  margin-bottom: 40px;
  padding: 15px;
  border-top: 2px solid #333;
  background-color: #ECF0F5;
  border-radius: 2px;
`
