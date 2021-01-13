/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestListSpots } from '../../redux/actions/listActions';
import './randomSpot.css';

function RandomSpot({ spots, dispatch }) {
  const [test, setTest] = useState(null);
  useEffect(() => {
    dispatch(requestListSpots());
    setTest(Math.floor(Math.random() * spots?.length));
  }, []);

  return (

    <>
      <section id="spot-random-wrapper">
        {spots && spots?.length > 0 && (
        <>
          <Link id="random-link" alt="tupu" to={`/spot/${spots[test]?._id}`}>
            <h4 id="random-spot-name">{spots[test]?.spotName}</h4>
            <p id="text-spot">Go and check this random spot</p>

            <img
              alt="spotterini"
              id="image_random"
              src={spots[test]?.spotImage[test]?.length === 0
                ? 'https://cdn.discordapp.com/attachments/631186181610143771/777141944320131112/ShoveItAnimation.gif'
                : spots[test]?.spotImage[test]}
            />
          </Link>
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

export default connect(mapStateToProps)(RandomSpot);
