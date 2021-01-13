import React from 'react';

import './CardList.css';

function CardList(props) {
  const { challenge } = props;

  return (
    <div key={challenge._id} className="list-item">
      <div className="item-image_container">
        <img src={challenge?.image} alt="challenge-img" className="item-image" />
      </div>
      <div className="item-join">
        <button type="button" className="item-btn">UNIRSE</button>
        <div className="item-target">
          {challenge?.target}
          {' '}
          €
        </div>
      </div>
      <div className="item-title">{challenge?.title}</div>
      <div className="item-category">{challenge?.category}</div>
      <hr />
      <div className="item-miniDescription">{challenge?.miniDescription}</div>
    </div>
  );
}

export default CardList;
