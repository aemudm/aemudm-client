import React from 'react'
import Header from '../styles/Header'
import images from '../images'
const HeaderComponent = (props) => (
  <Header>
    <img src={images[props.image]} alt={props.image} />
  </Header>
)
export default HeaderComponent
