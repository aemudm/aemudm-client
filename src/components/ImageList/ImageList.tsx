import React from 'react'

import images from '../../images'

import { ImageListStyled } from './ImageList.styles'


interface ImageListProps {
  list: string[]
  height?: string
}

export const ImageList = (props: ImageListProps) => (
  <ImageListStyled className='image-list'>
    {props.list.map((url, index) => (
      <img
        style={{ height: props.height || '' }}
        key={index}
        src={images[url]}
        alt={url}
      />
    ))}
  </ImageListStyled>
)

