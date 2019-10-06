import React from 'react'
import Header from '../styles/Header'

const HeaderComponent = (props) => (
  <Header>
    <img src={props.image} alt={props.image} />
  </Header>
)
export default HeaderComponent
