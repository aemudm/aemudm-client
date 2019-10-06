import React from 'react'
import ImageList from '../styles/ImageList'
import images from '../images'

const ImageListComponent = (props) => (
  <ImageList className='image-list'>
    {props.list.map((url, index) => (
      <img
        style={{ height: props.height || '' }}
        key={index}
        src={images[url]}
        alt={url}
      />
    ))}
  </ImageList>
)

export default ImageListComponent
