import React from 'react'
import { CustomCard, ImageList } from './'
import { Link } from 'react-router-dom'
const CardComponent = (props) => (
  <CustomCard
    cover={props.thinPadding}
    href={props.cardLink}
    cardCount={props.cardCount}
    file={props.file}
  >
    {(props.image || props.imageList) &&
      <ImageList list={props.image ? [props.image] : props.imageList} />
    }
    {props.fullSizeImage &&
      <img src={props.fullSizeImage} alt={props.fullSizeImage} />
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
export default CardComponent
