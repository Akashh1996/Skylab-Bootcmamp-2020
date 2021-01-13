/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import classnames from 'classnames';

import {
  TabContent, TabPane, Nav, NavItem, NavLink,
} from '../../../node_modules/reactstrap/lib/index';

import Map from '../Map/Map';
import credentials from '../../Private/credential';

import pmt1 from '../images/checkout/img-1.png';
import pmt2 from '../images/checkout/img-2.png';
import pmt3 from '../images/checkout/img-3.png';
import pmt4 from '../images/checkout/img-4.png';

import './ChallengeCard2.css';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function ChallengeCard2({ challenge }) {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div id="details-container" className="wpo-case-details-area section-padding">
      <div className="container">
        <div id="details-row" className="row">
          <div className="col col-lg-8">
            <div className="wpo-case-details-wrap">
              <div className="wpo-case-details-img">
                <img src={challenge.image} alt="" />
              </div>
              <div className="wpo-case-details-tab">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      id="description"
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => { toggle('1'); }}
                    >
                      Descripción
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      id="donation"
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { toggle('2'); }}
                    >
                      Donación
                    </NavLink>
                  </NavItem>

                </Nav>
              </div>
              <div id="description-section" className="wpo-case-details-text">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div className="row">
                      <div className="col-12">
                        <div className="wpo-case-content">
                          <div className="wpo-case-text-top">
                            <h2>{challenge.title}</h2>
                            <h3 id="creator" className="case-b-text">

                              RESPONSABLE DEL RETO:
                              {' '}
                              {challenge.creator}

                            </h3>
                            <ul>
                              <li>
                                <span>Recaudación:</span>
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
                              <li>
                                <span>Participantes:</span>
                                {' '}
                                {challenge.participants}
                              </li>
                            </ul>

                            <div className="case-b-text">
                              <p>
                                {challenge.miniDescription}

                              </p>
                            </div>
                            <div className="case-bb-text">
                              <h3>
                                <u>Objetivo del reto</u>
                                {' '}
                              </h3>
                              <p>
                                {challenge.description}
                              </p>
                              <ul>
                                <li>Ayuda con lo que puedas, no importa la cantidad</li>
                                <li>Si no puedes ayudar económicamente, hay otras maneras</li>
                                <li>Cada grano de tierra hace montaña</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <h2 className="location-title">Ubicación del reto</h2>
                        <Map
                          googleMapURL={mapURL}
                          containerElement={<div style={{ height: '400px' }} />}
                          mapElement={<div style={{ height: '100%' }} />}
                          loadingElement={<p>Cargando...</p>}
                          challenge={challenge}
                        />
                      </div>
                    </div>
                  </TabPane>

                  <TabPane tabId="2">
                    <form onSubmit={SubmitHandler} action="#">
                      <div className="wpo-donations-amount">
                        <h2>Hacer una Donación</h2>
                        <input type="text" className="form-control" name="text" id="text" placeholder="Introduce la cantidad" />
                      </div>
                      <div className="wpo-donations-details">
                        <h2>Detalles</h2>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                            <input type="text" className="form-control" name="name" id="fname" placeholder="Nombre" />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                            <input type="text" className="form-control" name="name" id="name" placeholder="Apellidos" />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                            <input type="text" className="form-control" name="Adress" id="Adress" placeholder="Dirección" />
                          </div>
                          <div className="col-lg-12 col-12 form-group">
                            <textarea className="form-control" name="note" id="note" placeholder="Mensaje" />
                          </div>
                        </div>
                      </div>
                      <div className="wpo-doanation-payment">
                        <h2>Elige un medio de pago</h2>
                        <div className="wpo-payment-area">
                          <div className="row">
                            <div className="col-12">
                              <div className="wpo-payment-option" id="open4">
                                <div className="wpo-payment-select">
                                  <ul>
                                    <li className="addToggle">
                                      <input id="add" type="radio" name="payment" value="30" />
                                      <label htmlFor="add">Pago con tarjeta</label>
                                    </li>
                                    <li className="removeToggle">
                                      <input id="remove" type="radio" name="payment" value="30" />
                                      <label htmlFor="remove">Donación Offline</label>
                                    </li>
                                  </ul>
                                </div>
                                <div id="open5" className="payment-name">
                                  <ul>
                                    <li className="visa">
                                      <input id="1" type="radio" name="size" value="30" />
                                      <label htmlFor="1"><img src={pmt1} alt="" /></label>
                                    </li>
                                    <li className="mas">
                                      <input id="2" type="radio" name="size" value="30" />
                                      <label htmlFor="2"><img src={pmt2} alt="" /></label>
                                    </li>
                                    <li className="ski">
                                      <input id="3" type="radio" name="size" value="30" />
                                      <label htmlFor="3"><img src={pmt3} alt="" /></label>
                                    </li>
                                    <li className="pay">
                                      <input id="4" type="radio" name="size" value="30" />
                                      <label htmlFor="4"><img src={pmt4} alt="" /></label>
                                    </li>
                                  </ul>
                                  <div className="contact-form form-style">
                                    <div className="row">
                                      <div className="col-lg-6 col-md-12 col-12">
                                        <label>Nombre del propietario de la tarjeta</label>
                                        <input type="text" placeholder="" name="name" />
                                      </div>
                                      <div className="col-lg-6 col-md-12 col-12">
                                        <label>Número de tarjeta</label>
                                        <input type="text" placeholder="" id="card" name="card" />
                                      </div>
                                      <div className="col-lg-6 col-md-12 col-12">
                                        <label>CVV</label>
                                        <input type="text" placeholder="" name="CVV" />
                                      </div>
                                      <div className="col-lg-6 col-md-12 col-12">
                                        <label>Fecha de caducidad</label>
                                        <input type="text" placeholder="" name="date" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submit-area">
                        <button id="submit-donation" type="submit" className="theme-btn submit-btn">Hacer Donación</button>
                      </div>
                    </form>
                  </TabPane>

                </TabContent>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ChallengeCard2;
