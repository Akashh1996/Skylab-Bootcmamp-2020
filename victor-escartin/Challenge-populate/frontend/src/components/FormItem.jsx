/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import React from 'react';

function FormItem(props) {
  const { user } = props;

  return (
    <div key={user._id} className="form-item">
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-4">
            <img src="https://librenoticias.com/wp-content/uploads/2020/08/default-user-image-400x400.png" className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                NAME:
                {' '}
                {user.name}
              </h5>

              <p className="card-text">
                AGE:
                {user.age}
                {' '}
                years
              </p>

              <p className="card-text">
                _______ADDRESS______
              </p>

              <p className="card-text">
                STREET:
                {' '}
                {user.address.street}
              </p>

              <p className="card-text">
                NUMBER:
                {' '}
                {user.address.number}

              </p>

              <p className="card-text">
                CITY:
                {' '}
                {user.address.city}
              </p>

              <p className="card-text">
                COUNTRY:
                {' '}
                {user.address.country.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormItem;
