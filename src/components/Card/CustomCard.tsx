import React from 'react'
import { Link } from 'react-router-dom'

import { InheritedPropsFromSection } from '../Section/Section'

import { CardStyled } from './Card.styles'

interface CustomCardProps {
  href?: string
  scroll?: boolean
  cover?: boolean
  file?: string
  children: any
}

export class CustomCard extends React.Component<CustomCardProps> {
  ref: any
  render(): JSX.Element {
    const classNames = []
    if (this.props.href) { classNames.push('link') }
    if (this.props.scroll) { classNames.push('scroll') }
    return (
      <CardStyled
        ref={(ref: any) => { this.ref = ref }}
        cardCount={(this.props as unknown as InheritedPropsFromSection).cardCount}
        background={(this.props as unknown as InheritedPropsFromSection).background}
        className={classNames.join(' ')}
        onMouseLeave={() => { this.ref.scrollTop = 0 }}
        cover={!!this.props.cover}
      >
        <RenderConditions {...this.props} />
      </CardStyled>
    )
  }
}

const RenderConditions = (props: CustomCardProps): any => {
  if (!props.href) { return props.children }
  if (props.file) { return <a target='_blank' rel='noopener noreferrer' href={props.file}>{props.children}</a> }
  if (props.href.includes('www.') || props.href.includes('http')) {
    return <a target='_blank' rel='noopener noreferrer' href={props.href}>{props.children}</a>
  } else {
    return <Link to={props.href}>{props.children}</Link>
  }
}
