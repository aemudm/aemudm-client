import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './Routes'
import './styles/reset.css'
import './styles/themeVariables'

const App = () => (
  <BrowserRouter>
    <Route path='/' component={Routes} />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
