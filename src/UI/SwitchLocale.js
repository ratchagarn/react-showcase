/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - SwitchLocale
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { actionSetLocale } from 'redux/appReducer'

const SwitchLocal = ({ locale, dispatch }) => {
  return (
    <Container>
      <Locale active={locale === 'EN'} onClick={handleOnClick('EN')}>EN</Locale>
      <Locale active={locale === 'TH'} onClick={handleOnClick('TH')}>TH</Locale>
    </Container>
  )

  function handleOnClick(locale) {
    return () => {
      dispatch(actionSetLocale(locale))
      localStorage.setItem('locale', locale)
    }
  }
}

const Container = styled.div`
  margin-bottom: 20px;
`

const Locale = styled.span`
  display: inline-block;
  font-size: 12px;
  color: ${props => props.active ? 'red' : '#333'};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:after {
    content: '|';
    display: inline-block;
    margin-left: 4px;
    margin-right: 4px;
    color: #333;
  }

  &:last-child&:after {
    display: none;
  }
`

export default connect((state) => ({ locale: state.locale }))(SwitchLocal)
