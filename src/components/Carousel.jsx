import React from 'react'
import Carousel from '../styles/Carousel'

export default class CarouselComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { index: 0 }
    this.goNextRecursive()
    this.stopRecursive = false
  }
  stop (speed) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), speed)
    })
  }
  async goNextRecursive () {
    const { length } = this.props.list
    if (!length || this.stopRecursive) return
    let { index } = this.state
    await this.stop(this.props.speed)
    index = index < length - 1 ? index + 1 : 0
    this.setState({ index }, this.goNextRecursive)
  }
  componentWillUnmount () {
    this.stopRecursive = true
  }
  increment (increment) {
    const { length } = this.props.list
    let newIndex = this.state.index + increment
    if (newIndex === length) newIndex = 0
    if (newIndex === -1) newIndex = length - 1
    this.setState({ index: newIndex })
  }
  render () {
    const item = this.props.list[this.state.index]
    return (
      <Carousel style={{ backgroundImage: `url('${item}')` }}>

        <i
          className='fas fa-arrow-left'
          onClick={() => this.increment(-1)}
        />
        <i
          className='fas fa-arrow-right'
          onClick={() => this.increment(1)}
        />
      </Carousel>
    )
  }
}
