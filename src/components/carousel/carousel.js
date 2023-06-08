import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/Cascina, sala pranzo con salottino(2).jpg';
import img2 from '../../assets/Cascina, tavolata esterna(1).jpg';
import img3 from '../../assets/Cascina, vista campo giochi.jpg';
import img4 from '../../assets/Cascina, vista.jpg';
import img5 from '../../assets/cascina, esterno (1).jpg';

function MyCarousel() {
  return (
  
          <Carousel id="carouselExample" >
            <Carousel.Item className='cont_carousel'>
              <img src={img1} className="d-block w-100 rounded img_carousel" alt="..." />
            </Carousel.Item>
            <Carousel.Item className='cont_carousel'>
              <img src={img2} className="d-block w-100 rounded img_carousel" alt="..." />
            </Carousel.Item>
            <Carousel.Item className='cont_carousel'>
              <img src={img3} className="d-block w-100 rounded img_carousel" alt="..." />
            </Carousel.Item>
            <Carousel.Item className='cont_carousel'>
              <img src={img4} className="d-block w-100 rounded img_carousel" alt="..." />
            </Carousel.Item>
            <Carousel.Item className='cont_carousel'>
              <img src={img5} className="d-block w-100 rounded img_carousel" alt="..." />
            </Carousel.Item>

          </Carousel>
    
  );
}
export default MyCarousel;