import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../styles/Card'

export default class CardComponent extends React.Component {
  render () {
    const classNames = []
    if (this.props.href) classNames.push('link')
    if (this.props.scroll) classNames.push('scroll')
    return (
      <Card
        ref={(ref) => { this.ref = ref }}
        cardCount={this.props.cardCount}
        background={this.props.background}
        className={classNames.join(' ')}
        onMouseLeave={() => { this.ref.scrollTop = 0 }}
        cover={this.props.cover}
      >
        <RenderConditions {...this.props} />
      </Card>
    )
  }
}
const RenderConditions = (props) => {
  if (!props.href) return props.children
  if (props.file) return <a target='_blank' rel='noopener noreferrer' href={props.file}>{props.children}</a>
  if (props.href.includes('www.') || props.href.includes('http')) {
    return <a target='_blank' rel='noopener noreferrer' href={props.href}>{props.children}</a>
  } else {
    return <Link to={props.href}>{props.children}</Link>
  }
}
