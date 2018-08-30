/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - SwitchLocale
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { actionSetLocale } from 'redux/appReducer'

const SwitchLocal = ({ dispatch }) => {
  return (
    <Container>
      <button onClick={onLocaleChange('EN')}>EN</button>
      <button onClick={onLocaleChange('TH')}>TH</button>
    </Container>
  )

  function onLocaleChange(locale) {
    return () => {
      dispatch(actionSetLocale(locale))
      localStorage.setItem('locale', locale)
    }
  }
}

const Container = styled.div`
  margin-bottom: 20px;
`

export default connect()(SwitchLocal)
