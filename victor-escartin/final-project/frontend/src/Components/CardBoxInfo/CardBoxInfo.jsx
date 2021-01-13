import React from 'react';

import './CardBoxInfo.css';

function CardBoxInfo({ challenge }) {
  return (
    <>
      <div className="card-box">
        <div className="card-info_box">
          <div className="card-info_item">
            <div className="card-info_item-title">COLLECTED:</div>

            <div id="collected" className="card-info_item-detail">
              {challenge.collected}
              {' '}
              €
            </div>
          </div>
          <div className="card-info_item">
            <div className="card-info_item-title">GOAL:</div>

            <div className="card-info_item-detail">
              {challenge.target}
              {' '}
              €
            </div>
          </div>
          <div className="card-info_item">
            <div className="card-info_item-title">DONATIONS:</div>

            <div className="card-info_item-detail">
              {challenge.participants}
              {' '}
              participants
            </div>
          </div>
          <div className="card-info_item">
            <div className="card-info_item-title">REMAINING:</div>

            <div className="card-info_item-detail">
              {challenge.days}
              {' '}
              days
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default CardBoxInfo;
