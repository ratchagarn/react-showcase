import styled from 'styled-components'


const Button = styled.button`
  display: inline-block;
  margin-right: 4px;
  padding: 8px 16px;
  border: 1px solid transparent;
  background-color: ${props => props.bgColor ? props.bgColor : '#EAEAEA'};
  color: ${props => props.color ? props.color : 'black'};
  font-size: 14px;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  transition: .2s;
`

export default Button
