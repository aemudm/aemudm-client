import React from 'react'

import { SectionStyled } from './Section.styles'

interface SectionProps {
  children: any
  background: "beige" | "green" | "books"
  title?: string
}

export interface InheritedPropsFromSection {
  background: "beige" | "green" | "books"
  cardCount: number
}

export class Section extends React.Component<SectionProps> {
  render(): JSX.Element {
    const cardCount = Array.from(this.props.children || []).length
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        background: this.props.background,
        cardCount
      })
    })
    return (
      <SectionStyled background={this.props.background}>
        {this.props.title && <h1>{this.props.title}</h1>}
        <div className='wrapper'>
          {children}
        </div>
      </SectionStyled>
    )
  }
}
