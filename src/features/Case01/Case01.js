import React, { Component, Fragment } from 'react'
import styled from 'styled-components'


class Case01 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rows: 0,
    }
  }

  render() {
    const { rows } = this.state
    const fields = []

    for (let i = 1, len = rows; i <= len; i++) {
      fields.push(<InputBlock key={`field-${i}`} title={`field ${i}`} />)
    }

    return (
      <Fragment>
        <h1>Case 01</h1>
        <Wrapper>
          {fields}
        </Wrapper>
        <br />
        <button onClick={this.handleOnAddField}>Add new field</button>
      </Fragment>
    )
  }

  handleOnAddField = () => {
    this.setState({ rows: this.state.rows + 1 })
  }
}

export default Case01


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
