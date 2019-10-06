import React from 'react'
import { NavLink } from 'react-router-dom'
import images from '../images'
import Nav from '../styles/Nav'

class NavComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false
    }
  }
  render () {
    const classNames = ['wrapper']
    if (this.state.isActive) classNames.push('active')
    return (
      <Nav>
        <img src={images.aemudm} alt={images.aemudm} />
        <div
          className={classNames.join(' ')}
          onClick={() => this.setState({ isActive: false })}
        >
          <NavLink to='/accueil'>Accueil</NavLink>
          <NavLink to='/activites'>Activités</NavLink>
          <NavLink to='/simpliquer'>S'impliquer</NavLink>
          {/* <NavLink to='/library'>Bibliothèque</NavLink> */}
          <NavLink to='/references'>Références</NavLink>
        </div>
        <i
          className='far fa-bars'
          onClick={() => this.setState({ isActive: !this.state.isActive })}
        />
      </Nav>
    )
  }
}
export default NavComponent
