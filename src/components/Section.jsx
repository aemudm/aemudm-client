import React from 'react'
import Section from '../styles/Section'

export default class SectionComponent extends React.Component {
  render () {
    const cardCount = Array.from(this.props.children || []).length
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        background: this.props.background,
        cardCount
      })
    })
    return (
      <Section background={this.props.background}>
        {this.props.title && <h1>{this.props.title}</h1>}
        <div className='wrapper'>
          {children}
        </div>
      </Section>
    )
  }
}
