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
  border: 2px solid #CCC;
  background-color: ${props => props.disabled ? '#DDD' : 'white'};
  color: ${props => props.hasError ? 'red' : 'black'};
  border-color: ${props => props.hasError ? 'red' : null};
  font-size: 14px;
  outline: none;
  border-radius: 2px;
  transition: .2s;

  &:focus {
    border-color: ${props => props.hasError ? 'red' : 'blue'};
  }
`

Form.Textarea = styled.textarea.attrs({
  rows: 10,
})`
  display: block;
  width: 100%;
  padding: 10px;
  border: 2px solid #CCC;
  background-color: ${props => props.disabled ? '#DDD' : 'white'};
  color: ${props => props.hasError ? 'red' : 'black'};
  border-color: ${props => props.hasError ? 'red' : null};
  font-size: 14px;
  outline: none;
  border-radius: 2px;
  transition: .2s;

  &:focus {
    border-color: ${props => props.hasError ? 'red' : 'blue'};
  }
`
