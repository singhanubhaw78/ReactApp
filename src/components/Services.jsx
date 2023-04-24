import React from 'react';
import {Carousel} from 'react-responsive-carousel';
// for applying the style of carousel, we will have to import the style file from nod_modules
import "C:/Users/91857/Desktop/PWSkills2/React/project1/node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';


const Services = () => {
  return (
    <div className="services">

    <Carousel
    infiniteLoop
    autoPlay
    showStatus={false}
    showArrows={false}
    showThumbs={false}
    interval={2000}
    >

    <div>
    <img src={img1} alt="Item1" />
    <p className='legend'>Full Stack</p>
    </div>

    <div>
    <img src={img2} alt="Item2" />
    <p className='legend'>Data Scientist</p>
    </div>

    </Carousel>

    </div>
  )
}

export default Services