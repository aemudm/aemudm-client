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
        <>
          {this.props.href &&
            ((this.props.href.includes('www.') || this.props.href.includes('http') || this.props.file)
              ? <a target='_blank' rel='noopener noreferrer' href={this.props.href}>{this.props.children}</a>
              : <Link to={this.props.href}>{this.props.children}</Link>)
          }
          {!this.props.href &&
          this.props.children
          }
        </>
      </Card>
    )
  }
}
