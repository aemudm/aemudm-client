import React from 'react'
import { NavLink } from 'react-router-dom'

import images from '../../images'

import { NavStyled } from './Nav.styles'


interface NavState {
  isActive: boolean
}

export class Nav extends React.Component<{}, NavState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isActive: false
    }
  }
  render(): JSX.Element {
    const classNames = ['wrapper']
    if (this.state.isActive) { classNames.push('active') }
    return (
      <NavStyled>
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
      </NavStyled>
    )
  }
}
