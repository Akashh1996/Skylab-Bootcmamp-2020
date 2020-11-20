import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createUser, loadUsers } from '../../redux/actions/actions';
import './createUser.css';

function CreateUser({ userList, dispatch }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [code, setCode] = useState('');
  const [countryName, setCountryName] = useState('');

  const newUser = {
    name,
    age,
    address: {
      street,
      number,
      city,
      country: {
        code,
        countryName,
      },
    },
  };
  useEffect(() => {
    if (!userList || userList.length === 0) {
      dispatch(loadUsers());
    }
  }, [name]);
  return (
    <form className="d-flex flex-column new-user-form">
      <div className="form-row">
        <label htmlFor="name" className="col">
          Name:
          <input type="text" id="name" className="form-control" value={name} onChange={(event) => { setName(event.target.value); }} placeholder="Enter your name" />
        </label>
        <label htmlFor="age" className="col">
          Age:
          {' '}
          <input type="text" id="age" className="form-control" value={age} onChange={(event) => { setAge(event.target.value); }} placeholder="Enter your age" />
        </label>
      </div>
      <label htmlFor="Street">
        Street:
        {' '}
        <input type="text" id="Street" className="form-control" value={street} onChange={(event) => { setStreet(event.target.value); }} placeholder="Enter your street name" />
      </label>
      <label htmlFor="Number">
        Number:
        {' '}
        <input type="text" id="Number" className="form-control" value={number} onChange={(event) => { setNumber(event.target.value); }} placeholder="Enter your street number" />
      </label>
      <div className="form-row">
        <label htmlFor="city" className="form-group col-4">
          City:
          {' '}
          <input type="text" id="city" className="form-control" value={city} onChange={(event) => { setCity(event.target.value); }} placeholder="Enter your city" />
        </label>
        <label htmlFor="country-name" className="form-group col-4">
          Country name:
          {' '}
          <input type="text" id="country-name" className="form-control" value={countryName} onChange={(event) => { setCountryName(event.target.value); }} placeholder="Enter your country" />
        </label>
        <label htmlFor="code" className="form-group col-2">
          Country code:
          {' '}
          <input type="text" id="code" className="form-control" value={code} onChange={(event) => { setCode(event.target.value); }} placeholder="Code" />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary submit-btn"
        onClick={() => { dispatch(createUser(newUser)); }}
      >
        Submit
      </button>
      <ul>
        {userList && userList.length && userList.map((user) => (
          <li key={performance.now * Math.random()} className="d-flex flex-column mb-5">
            <span className="mr-2">{`Name: ${user.name}`}</span>
            <span>{`Age: ${user.age}`}</span>
            <span>{`Address: ${user.address.street} ${user.address.number}, ${user.address.city}, ${user.address.country.name}`}</span>
          </li>
        ))}
      </ul>
    </form>
  );
}

CreateUser.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    userList: state.userReducer,
  };
}

export default connect(mapStateToProps)(CreateUser);
