/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { requestListSpots } from '../../redux/actions/listActions';
import './list.css';

function List({ spots, dispatch }) {
  useEffect(() => {
    dispatch(requestListSpots());
  }, []);
  return (
    <>
      <section className="list_wrapper">
        {spots
            && spots.length > 0
            && (
            <>
              {spots.map((spot) => (
                <div className="project_wrapper" id="list_wrapper">
                  <Link id="spot-link" to={`/spot/${spot._id}`}>
                    <h3 className="spot_title">{spot.spotName}</h3>
                    <div id="linebreak" />
                  </Link>
                  <p className="spot-info">{spot.spotLocation}</p>
                  <p className="spot-style">
                    {' '}
                    Styles:
                    {' '}
                    {spot.spotStyle}
                  </p>

                  <img
                    alt="spotterini"
                    id="image_random"
                    src={spot.spotImage.length === 0
                      ? 'https://cdn.discordapp.com/attachments/631186181610143771/777141944320131112/ShoveItAnimation.gif'
                      : spot.spotImage[1]}
                  />

                </div>
              ))}
            </>
            )}

      </section>

    </>
  );
}

function mapStateToProps({ listReducer }) {
  return {
    spots: listReducer.spots,
  };
}
export default connect(mapStateToProps)(List);
