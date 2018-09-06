/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example05/CreatePromotionForm
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import styled from 'styled-components'

import Form from 'UI/Form'


const CreatePromotionForm = ({
  index,
  id,
  data,
  errorFields,
  onClickAdd,
  onClickDelete,
  onInputChange,
}) => (
  <Container>
    <ActionButton bgColor="red" onClick={() => onClickDelete(id, index)}>− ลบ</ActionButton>
    <ActionButton bgColor="green" onClick={onClickAdd}>+ เพิ่ม</ActionButton>
    <Header>โปรโมชั่น - {id}</Header>
    <Form.Block>
      <Form.Label>ชื่อโปรโมชั่น</Form.Label>
      <Form.Input
        name="name"
        autoComplete="off"
        value={data.name}
        hasError={errorFields.indexOf('name') > -1}
        onChange={(event) => onInputChange(event, index)}
      />
    </Form.Block>
    <Form.Block>
      <Form.Label>รายละเอียด</Form.Label>
      <Form.Textarea
        name="detail"
        autoComplete="off"
        value={data.detail}
        hasError={errorFields.indexOf('detail') > -1}
        onChange={(event) => onInputChange(event, index)}
      />
    </Form.Block>
  </Container>
)



CreatePromotionForm.defaultProps = {
  id: 1,
}


export default CreatePromotionForm


const Container = styled.div`
  position: relative;
  margin-bottom: 40px;
  padding: 15px;
  border-top: 2px solid #333;
  background-color: #ECF0F5;
  border-radius: 2px;
`

const Header = styled.h3`
  margin: 0 0 40px 0;
  padding-bottom :10px;
  border-bottom: 1px solid #333;
`

const ActionButton = styled.span`
  display: inline-block;
  float: right;
  padding: 4px 10px;
  background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
  color: white;
  font-size: 12px;
  text-align: center;
  cursor: pointer;

  &:first-of-type {
    border-radius: 0 4px 4px 0;
  }

  &:last-of-type {
    border-radius: 4px 0 0 4px;
  }
`
