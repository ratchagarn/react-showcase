import styled from 'styled-components'


const Form = styled.form`
  margin: 0;
`

export default Form


Form.Block = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`

Form.Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  font-weight: bold;
`

Form.Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #CCC;
  background-color: ${props => props.disabled ? '#DDD' : 'white'};
  font-size: 14px;
  outline: none;
  border-radius: 2px;
  transition: .2s;

  &:focus {
    border-color: blue;
  }
`

Form.Textarea = styled.textarea.attrs({
  rows: 10,
})`
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #CCC;
  background-color: ${props => props.disabled ? '#DDD' : 'white'};
  font-size: 14px;
  outline: none;
  border-radius: 2px;
  transition: .2s;

  &:focus {
    border-color: blue;
  }
`
