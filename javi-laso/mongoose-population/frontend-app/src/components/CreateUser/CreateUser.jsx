import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createUser, loadUsers } from '../../redux/actions/actions';

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
  }, []);
  return (
    <div className="d-flex flex-column ">
      <label htmlFor="name">
        Name
        <input type="text" id="name" value={name} onChange={(event) => { setName(event.target.value); }} />
      </label>
      <label htmlFor="age">
        Age
        <input type="text" id="age" value={age} onChange={(event) => { setAge(event.target.value); }} />
      </label>
      <label htmlFor="Street">
        Street
        <input type="text" id="Street" value={street} onChange={(event) => { setStreet(event.target.value); }} />
      </label>
      <label htmlFor="Number">
        Number
        <input type="text" id="Number" value={number} onChange={(event) => { setNumber(event.target.value); }} />
      </label>
      <label htmlFor="city">
        City
        <input type="text" id="city" value={city} onChange={(event) => { setCity(event.target.value); }} />
      </label>
      <label htmlFor="code">
        Country code
        <input type="text" id="code" value={code} onChange={(event) => { setCode(event.target.value); }} />
      </label>
      <label htmlFor="country-name">
        Country name
        <input type="text" id="country-name" value={countryName} onChange={(event) => { setCountryName(event.target.value); }} />
      </label>
      <button
        type="submit"
        className="btn btn-primary"
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
    </div>
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
