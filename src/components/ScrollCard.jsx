import { CustomCard, ImageList } from '../components'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
const ScrollCard = (props) => (
  <CustomCard
    scroll
    cardCount={props.cardCount}
    href={props.link || props.file}
    file={props.file}
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
export default ScrollCard
