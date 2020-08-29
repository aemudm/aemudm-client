import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

import { CustomCard, ImageList } from '..'
import { InheritedPropsFromSection } from '../Section/Section'

interface ScrollCardProps {
  link?: string
  file?: string
  imageHeight?: string
  image: string
  title: string
  description: string
}

export const ScrollCard = (props: ScrollCardProps) => (
  <CustomCard
    scroll
    href={props.link || props.file}
    file={props.file}
    {...{
      cardCount: (props as unknown as InheritedPropsFromSection).cardCount,
      background: (props as unknown as InheritedPropsFromSection).background
    }}
  >
    <ImageList height={props.imageHeight} list={[props.image]} />
    <div className='scroll-wrapper'>
      <PerfectScrollbar>
        <h4>{props.title}</h4>
        <span>{props.description}</span>
      </PerfectScrollbar>
    </div>
  </CustomCard>
)
