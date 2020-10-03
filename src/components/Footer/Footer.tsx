import React from 'react'

import images from '../../images'

import { FooterStyled } from './Footer.styles'



export class Footer extends React.Component {
  render(): JSX.Element {
    return (
      <FooterStyled>
        <div className='wrapper'>
          <Icon image='facebook' href='http://www.facebook.com/aemudm' />
          <Icon image='instagram' href='https://www.instagram.com/aemudm' />
          <Icon image='twitter' href='https://twitter.com/aemudm' />
          <Icon image='mail' href='mailto:aemudm@gmail.com' />
          <Icon image='youtube' href='http://www.youtube.com/user/aemudem' />
        </div>
        <p>aemudm.ca copyright © {getYear()}</p>
      </FooterStyled>
    )
  }
}

interface IconProps {
  href: string
  image: string
}

const getYear = () => {
    let d = new Date();
    return d.getFullYear();
}

const Icon = (props: IconProps) => (
  <a href={props.href}><img src={images[props.image]} alt={props.image} /></a>
)
