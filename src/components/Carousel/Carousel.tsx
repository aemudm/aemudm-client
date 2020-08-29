import React from 'react'

import images from '../../images'

import { CarouselStyled } from './Carousel.styles'

interface CarouselProps {
  imageList: string[]
  speed: number
}

interface CarouselState {
  index: number
}


export class Carousel extends React.Component<CarouselProps, CarouselState> {
  stopRecursive: boolean
  constructor(props: CarouselProps) {
    super(props)
    this.state = { index: 0 }
    this.goNextRecursive()
    this.stopRecursive = false
  }

  stop(speed: number): Promise<undefined> {
    return new Promise(resolve => {
      setTimeout(() => resolve(), Number(speed) * 1000)
    })
  }

  async goNextRecursive(): Promise<undefined> {
    const { length } = this.props.imageList
    if (!length || this.stopRecursive) { return }
    let { index } = this.state
    await this.stop(this.props.speed)
    index = index < length - 1 ? index + 1 : 0
    this.setState({ index }, this.goNextRecursive)
  }

  componentWillUnmount(): void {
    this.stopRecursive = true
  }

  increment(increment: 1 | -1): void {
    const { length } = this.props.imageList
    let newIndex = this.state.index + increment
    if (newIndex === length) { newIndex = 0 }
    if (newIndex === -1) { newIndex = length - 1 }
    this.setState({ index: newIndex })
  }

  render(): JSX.Element {
    const item = this.props.imageList[this.state.index]
    return (
      <CarouselStyled style={{ backgroundImage: `url('${images[item]}')` }}>

        <i
          className='fas fa-arrow-left'
          onClick={() => this.increment(-1)}
        />
        <i
          className='fas fa-arrow-right'
          onClick={() => this.increment(1)}
        />
      </CarouselStyled>
    )
  }
}
