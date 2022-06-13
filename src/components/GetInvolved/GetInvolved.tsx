import React from 'react'

import images from '../../images'

import { GetInvolvedStyled } from './GetInvolved.styles'


export const GetInvolved = (): JSX.Element => (
  <GetInvolvedStyled id='end'>
    <img src={images.background4} alt='background4' />
    <div className='content'>
      <a target='_blank' rel='noopener noreferrer' href='https://forms.gle/qi3WyUoGhTP3jTht9'>Devenir membre</a>
      <a target='_blank' rel='noopener noreferrer' href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PEDJ5XEWXD7VJ&source=url'>Faire un don</a>
    </div>
    <div className='footer'>
      <img src={images.baniere} alt='baniere' />
      <img src={images.universities} alt='universities' />
      <img src={images.servir} alt='servir' />
    </div>
  </GetInvolvedStyled>
)
