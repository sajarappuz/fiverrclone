import React from 'react'
import "./Slide.scss"
import Slider from 'infinite-react-carousel';
import CatCard from '../categoryCard/CatCard';

 

const Slide = ({children, slidesToShow, arrowsScroll}) => {
  return (
    <div className='slide'>
        <div className="container">
        <Slider slidesToShow={slidesToShow}  arrowsScroll={arrowsScroll}>
            {children}
       </Slider>
        </div>
    </div>
  )
}

export default Slide