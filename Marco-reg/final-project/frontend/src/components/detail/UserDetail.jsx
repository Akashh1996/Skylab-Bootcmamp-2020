/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { requestUser } from '../../redux/actions/userActions';
import './userDetail.css';

function UserDetail({ user, dispatch }) {
  const { userId } = useParams();

  useEffect(() => {
    if (!user || !user.name || !user.userPhotos.length) {
      dispatch(requestUser(userId));
    }
  }, []);

  return (
    <>
      <section className="main-wrapper">
        <p id="user-name">{user?.userName}</p>
        <img src={user?.userImage} alt="user-avatar" id="user-image" />
        <div id="linebreak-user" />
        <div id="user-spects">
          <p id="user-description">{user?.userDescription}</p>
          <div className="linebreak-vertical" />
          <ul id="spects">

            <li id="spects">
              City/Country :
              {' '}
              {user?.UserCity}
            </li>
            <li>
              Stance :
              {' '}
              {user?.userStance}
            </li>
            <li>
              Most Favorites skate styles :
              {' '}
              {user?.userStyle}
            </li>
          </ul>

        </div>
        <div id="linebreak-user">
          <div id="photo-section">

            {user && user.userPhotos?.length && user.userPhotos.map((userPhoto) => (
              <img
                id="user-photos"
                className="user-photos"
                src={`${userPhoto}`}
                alt="skate-photos"
              />
            ))}
          </div>

        </div>

      </section>
    </>
  );
}

function mapStateToProps({ userReducer }) {
  return {

    user: userReducer.user,
  };
}

export default connect(mapStateToProps)(UserDetail);
