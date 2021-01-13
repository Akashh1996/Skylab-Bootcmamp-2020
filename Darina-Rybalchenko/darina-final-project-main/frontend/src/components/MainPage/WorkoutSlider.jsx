import React, { useState } from 'react';
import './WorkoutSlider.css';
import Carousel from 'react-bootstrap/Carousel';

function WorkoutSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carousel-container" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://trello-attachments.s3.amazonaws.com/5fc0f7845fca4370bc8c6bca/5fd75975f84e7771934529fd/3eaf1fd878ae79ed414b4258a793f451/yoga-class-beach-meditation-tips-011617.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-title">Stretching</h3>
          <p className="carousel-slogan">For those who stretch the limits</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://trello-attachments.s3.amazonaws.com/5fc0f7845fca4370bc8c6bca/5fd5fb8012d0136f6290b8bf/d32b5ebda1344709ab0c9c5501bb0a4b/Benefits_of_Beach_Yoga.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="carousel-title">Yoga</h3>
          <p className="carousel-slogan">Connecting your mind, body and soul</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default WorkoutSlider;
