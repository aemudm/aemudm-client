import React from 'react'
import Footer from '../styles/Footer'
import images from '../images'

export default class FooterIndex extends React.Component {
  render () {
    return (
      <Footer>
        <div className='wrapper'>
          <Icon image='facebook' href='http://www.facebook.com/aemudm' />
          <Icon image='mail' href='mailto:aemudm@gmail.com' />
          <Icon image='twitter' href='https://twitter.com/aemudm' />
          <Icon image='youtube' href='http://www.youtube.com/user/aemudem' />
        </div>
        <p>aemudm.ca copyright ©</p>
      </Footer>
    )
  }
}

const Icon = (props) => (
  <a href={props.href}><img src={images[props.image]} alt={props.image} /></a>
)
