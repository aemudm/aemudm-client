import React from 'react'

import images from '../../images'

import { HeaderStyled } from './Header.styles'

interface HeaderProps {
  image: string
}

export const Header = (props: HeaderProps) => (
  <HeaderStyled>
    <img src={images[props.image]} alt={props.image} />
  </HeaderStyled>
)
