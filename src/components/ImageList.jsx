import React from 'react'
import ImageList from '../styles/ImageList'

const ImageListComponent = (props) => (
  <ImageList className='image-list'>
    {props.list.map((url, index) => (
      <img
        style={{ height: props.height || '' }}
        key={index}
        src={url}
        alt={url}
      />
    ))}
  </ImageList>
)

export default ImageListComponent
