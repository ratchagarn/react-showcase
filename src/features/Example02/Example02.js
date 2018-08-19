/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example02
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled from 'styled-components'

import { confirm } from 'helpers/utils'
import LayoutExamplePage from 'UI/LayoutExamplePage'


class Example02 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counters: [],
    }
  }

  render() {
    const { counters } = this.state
    const counterItems = counters.map((count, i) => (
      <Counter
        key={`counter-${i}`}
        index={i}
        count={count}
        onDelete={this.handleOnDelete}
        onAdd={this.handleOnAdd}
        onMinus={this.handleOnMinus}
      />
    ))

    return (
      <LayoutExamplePage title="Example 02" sourceName="Example02">
        <button onClick={this.handleAddCounter}>Add Counter</button>
        <hr />
        {counterItems.length > 0 ? counterItems : (
          <p>Don\'t have any counter, please click `Add Counter`.</p>
        )}
      </LayoutExamplePage>
    )
  }

  handleAddCounter = () => {
    const counters = [ ...this.state.counters ]
    counters.push(0)

    this.setState({ counters })
  }

  handleOnDelete = (index) => {
    if (!confirm('Do you want to delete this counter?')) { return }

    const counters = [ ...this.state.counters ]
    counters.splice(index, 1)

    this.setState({ counters })
  }

  handleOnAdd = (index) => {
    this.updateCounter('add', index)
  }

  handleOnMinus = (index) => {
    this.updateCounter('minus', index)
  }

  updateCounter = (type, index) => {
    if (type !== 'add' && type !== 'minus') { return }

    const counters = [ ...this.state.counters ]

    if (type === 'add') {
      counters[index] = counters[index] + 1
    }
    else {
      counters[index] = counters[index] - 1
    }

    this.setState({ counters })
  }
}

export default Example02


const Counter = ({ index, count, onDelete, onAdd, onMinus }) => {
  const counterMeters = []

  for (let i = 0, len = Math.abs(count); i < len; i++) {
    counterMeters.push(
      <CounterMeter key={`counter-meter-${i}`} count={count} />
    )
  }

  return (
    <Container>
      <Delete onClick={() => onDelete(index)}>×</Delete>
      <Title>Counter - {index + 1}</Title>
      <ButtonAction onClick={() => onAdd(index)}>+</ButtonAction>
      <ButtonAction onClick={() => onMinus(index)}>-</ButtonAction>
      <Count>
        {count}
        {counterMeters}
      </Count>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  border: 1px dashed #CCC;
  margin-bottom: 20px;
`

const Title = styled.h3`
  margin-top: 0;
`

const Delete = styled.span`
  float: right;
  padding: 2px;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: color;

  &:hover {
    color: red;
  }
`

const Count = styled.span`
  position: relative;
  display: inline-block;
  margin-left: 5px;
  padding-bottom: 20px;
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
`

const CounterMeter = styled.span`
  display: inline-block;
  width: 4px;
  height: 12px;
  margin-left: 1px;
  background-color: ${props => props.count > 0 ? 'blue' : 'red'};

  &:first-of-type {
    margin-left: 10px;
  }
`

const ButtonAction = styled.button`
  margin-right: 4px;
  padding: 10px;
  border: 1px solid #CCC;
  background-color: #DDD;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: .2s;

  &:hover {
    background-color: #EFEFEF;
  }
`
