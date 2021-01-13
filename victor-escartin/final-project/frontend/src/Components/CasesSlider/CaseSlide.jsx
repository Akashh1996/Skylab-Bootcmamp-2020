/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import './CaseSlide.css';

export default function CaseSlide({ challenges }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    margin: 10,
    loop: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="wpo-case-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <Link to="/challenges">
                <h2>RETOS CERCANOS A SU FINALIZACIÓN</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="wpo-case-wrap">
          <div className="wpo-case-slider">
            <Slider {...settings}>
              {challenges.map((challenge) => (
                <div className="wpo-case-single" key={challenge._id}>
                  <div className="wpo-case-item">
                    <div className="wpo-case-img">
                      <img src={challenge.image} alt="" />
                    </div>
                    <div className="wpo-case-content">
                      <div className="wpo-case-text-top">
                        <h2>{challenge.title}</h2>
                        <div className="progress-section">
                          <div className="process">
                            <div className="progress">
                              <div className="progress-bar">
                                <div id="percent" className="progress-value ">
                                  <span>30</span>
                                  %
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <span>Recaudado:</span>
                            {' '}
                            {challenge.collected}
                            {' '}
                            €
                          </li>
                          <li>
                            <span>Objetivo:</span>
                            {' '}
                            {challenge.target}
                            {' '}
                            €
                          </li>
                        </ul>
                      </div>
                      <div className="case-btn">
                        <ul>
                          <li className="case-btn_detail"><Link onClick={ClickHandler} to={`/challenges/${challenge._id}`}>Ver Detalles</Link></li>
                          <li className="case-btn_donate"><Link onClick={ClickHandler} to="/donate">Donar</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
