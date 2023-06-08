import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/Cascina, sala pranzo con salottino(2).jpg';
import img2 from '../../assets/Cascina, tavolata esterna(1).jpg';
import img3 from '../../assets/Cascina, vista campo giochi.jpg';
import img4 from '../../assets/Cascina, vista.jpg';
import img5 from '../../assets/cascina, esterno (1).jpg';

function MyCarousel() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <Carousel id="carouselExample">
            <Carousel.Item>
              <img src={img1} className="d-block w-100 rounded img_carousel" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} className="d-block w-100 rounded img_carousel" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img3} className="d-block w-100 rounded img_carousel" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img4} className="d-block w-100 rounded img_carousel" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img5} className="d-block w-100 rounded img_carousel" alt="..." />
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default MyCarousel;