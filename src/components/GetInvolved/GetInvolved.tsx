import React from 'react'
import { Link } from 'react-router-dom'

import images from '../../images'

import { GetInvolvedStyled } from './GetInvolved.styles'


export const GetInvolved = (): JSX.Element => (
  <GetInvolvedStyled id='end'>
    <img src={images.background4} alt='background4' />
    <div className='content'>
      <Link to='/becomeMember'>Devenir membre</Link>
      <a target='_blank' rel='noopener noreferrer' href='https://www.paypal.com/donate/?token=Jk2zn23pewRZUtI_mSEJiU3ph2G0tjSwlacL_5kCNFOMJUrO2uWKY1_nDQO6S-7bR5sfym&country.x=CA&locale.x=CA'>Faire un don</a>
    </div>
    <div className='footer'>
      <img src={images.baniere} alt='baniere' />
      <img src={images.universities} alt='universities' />
      <img src={images.servir} alt='servir' />
    </div>
  </GetInvolvedStyled>
)
