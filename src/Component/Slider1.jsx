import React from 'react'
import { Carousel } from 'react-bootstrap';
const Slider1 = () => {
    return (
      <div className="w-100 ">
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100 "
              src="pic.4.jpg"
              style={{ height: "500px" }}
              alt="Image One"
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="pic2.jpg
"
              style={{ height: "500px" }}
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Life to Tast</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 h-60"
              src="pic4.jpg
"
              style={{ height: "500px" }}
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Get Better service  </h3>
              <p>You will feel better</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default Slider1
