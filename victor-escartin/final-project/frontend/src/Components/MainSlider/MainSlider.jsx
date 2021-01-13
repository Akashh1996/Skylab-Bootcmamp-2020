import React from 'react';
import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';

import './MainSlider.css';

function MainSlider() {
  return (
    <div className="mainSlider-container">
      <Slider slidesToShow={1} autoplay autoplaySpeed={2000} speed={2000}>
        <div className="slider-item">
          <img src="https://images.pexels.com/photos/2456327/pexels-photo-2456327.jpeg?cs=srgb&dl=pexels-andreas-wohlfahrt-2456327.jpg&fm=jpg" alt="children" />
          <p>¿Necesitas recaudar fondos para tu causa?</p>
        </div>
        <div className="slider-item">
          <img src="https://images.pexels.com/photos/3873177/pexels-photo-3873177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="covid" />
          <p>Tú también puedes luchar contra la Covid-19</p>
        </div>
        <div className="slider-item">
          <img src="https://images.pexels.com/photos/1734425/pexels-photo-1734425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="christmas" />
          <p>Estas Navidades regálale a alguien una nueva oportunidad</p>
        </div>
        <div className="slider-item">
          <img src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?cs=srgb&dl=pexels-cottonbro-3943716.jpg&fm=jpg" alt="money" />
          <p>¿Quieres ayudar a cambiar el mundo?</p>
        </div>
      </Slider>
    </div>
  );
}

export default MainSlider;
