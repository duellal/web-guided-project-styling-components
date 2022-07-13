// This is for the fake API. Do not delete!
import { worker } from './api-mocks/browser'
worker.start()

import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './components/App'
import Theme from './theme/index'

import './styles.css'


render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.querySelector('#root')
)
