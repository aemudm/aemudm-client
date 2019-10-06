import React from 'react'
import { Link } from 'react-router-dom'
import GetInvolved from '../styles/GetInvolved'
import images from '../images'

const GetInvolvedComponent = (props) => (
  <GetInvolved id='end'>
    <img src={images.background4} alt={images.background4} />
    <div className='content'>
      <Link to='/becomeMember'>Devenir membre</Link>
      <a target='_blank' rel='noopener noreferrer' href='https://www.paypal.com/donate/?token=Jk2zn23pewRZUtI_mSEJiU3ph2G0tjSwlacL_5kCNFOMJUrO2uWKY1_nDQO6S-7bR5sfym&country.x=CA&locale.x=CA'>Faire un don</a>
    </div>
    <div className='footer'>
      <img alt={images.baniere} src={images.baniere} />
      <img alt={images.universities} src={images.universities} />
      <img alt={images.servir} src={images.servir} />
    </div>
  </GetInvolved>
)
export default GetInvolvedComponent
