/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example05/CreateCampaignForm
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import styled from 'styled-components'

import Form from 'UI/Form'


const CreateCampaignForm = () => (
  <Container>
    <Form.Block>
      <Form.Label>ชื่อแคมเปญ</Form.Label>
      <Form.Input />
    </Form.Block>
    <Form.Block>
      <Form.Label>เงื่อนไข</Form.Label>
      <Form.Textarea />
    </Form.Block>
  </Container>
)


export default CreateCampaignForm


const Container = styled.div`
  margin-bottom: 40px;
  padding: 15px;
  border-top: 2px solid #333;
  background-color: #ECF0F5;
  border-radius: 2px;
`
