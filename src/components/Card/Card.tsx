import React from 'react'
import { Link } from 'react-router-dom'

import { CustomCard, ImageList } from '..'
import images from '../../images'
import { InheritedPropsFromSection } from '../Section/Section'

interface CardProps {
  cardLink?: string
  file?: string
  image?: string
  imageList?: string[]
  fullSizeImage?: string
  thinPadding?: boolean
  title?: string
  subTitle?: string
  description?: string
  buttonLink?: string
  buttonTitle?: string
}


export const Card = (props: CardProps): JSX.Element => (
  <CustomCard
    cover={!!props.thinPadding}
    href={props.cardLink}
    file={props.file}
    {...{ cardCount: (props as InheritedPropsFromSection).cardCount, background: (props as InheritedPropsFromSection).background }}
  >
    {(props.image || props.imageList) &&
      <ImageList list={(props.image ? [props.image] : props.imageList as string[])} />
    }
    {props.fullSizeImage &&
      <img src={images[props.fullSizeImage]} alt={props.fullSizeImage} />
    }
    {props.title && <h3>{props.title}</h3>}
    {props.subTitle && <h4>{props.subTitle}</h4>}
    {props.description && <p>{props.description}</p>}
    {props.buttonLink && (props.buttonLink.includes('www.') || props.buttonLink.includes('http')) &&
      <Link to={props.buttonLink}>{props.buttonTitle}</Link>
    }
    {props.buttonLink && !(props.buttonLink.includes('www.') || props.buttonLink.includes('http')) &&
      <a target='_blank' rel='noopener noreferrer' href={props.buttonLink}>{props.buttonTitle}</a>
    }
  </CustomCard>
)
