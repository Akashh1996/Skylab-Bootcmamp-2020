import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import
{ requestCreateUsers, requestUsersList }
  from '../actions/usersAction';

function NewUsers({ usersList, dispatch }) {
  debugger;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [countryCode, setCode] = useState('');
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    if (!usersList || usersList?.length === 0) {
      dispatch(requestUsersList());
    }
  }, [usersList?.length]);

  return (
    <div className="list-container">
      <div className="d-flex flex-column">
        <p>CREATE NEW USER</p>
        <label htmlFor="name">
          Name
          <input type="text" id="name" value={name} onChange={(event) => { setName(event.target.value); }} />
        </label>
        <label htmlFor="age">
          Age
          <input type="text" id="age" value={age} onChange={(event) => { setAge(event.target.value); }} />
        </label>
        <label htmlFor="street">
          Street
          <input type="text" id="street" value={street} onChange={(event) => { setStreet(event.target.value); }} />
        </label>
        <label htmlFor="number">
          Number
          <input type="text" id="number" value={number} onChange={(event) => { setNumber(event.target.value); }} />
        </label>
        <label htmlFor="city">
          City
          <input type="text" id="city" value={city} onChange={(event) => { setCity(event.target.value); }} />
        </label>
        <label htmlFor="ccode">
          Country Code
          <input type="text" id="ccode" value={countryCode} onChange={(event) => { setCode(event.target.value); }} />
        </label>
        <label htmlFor="cname">
          Country Name
          <input type="text" id="cname" value={countryName} onChange={(event) => { setCountryName(event.target.value); }} />
        </label>
        <button
          type="submit"
          className="btn-primary btn"
          onClick={() => dispatch(requestCreateUsers({
            name,
            age,
            address: {
              street,
              number,
              city,
              country: { code: countryCode, name: countryName },
            },
          }))}
        >
          Submit
        </button>
      </div>
      <div>
        {(!usersList || !usersList.length) && <h1>There is no list!</h1>}
        {usersList && usersList.length > 0 && usersList.map((item) => (
          <>
            <div>
              <ul>
                <p>USERS INFO</p>
                <li>USER</li>
                <ul>
                  <li>{`Name: ${item.name}`}</li>
                  <li>{`Age: ${item.age}`}</li>
                  <li>Address:</li>
                  <ul>
                    <li>{`Street: ${item.address.street}`}</li>
                    <li>{`Number: ${item.address.number}`}</li>
                    <li>{`City: ${item.address.city}`}</li>
                    <li>Country:</li>
                    <ul>
                      <li>{`Code: ${item.address.country.code}`}</li>
                      <li>{`Name: ${item.address.country.name}`}</li>
                    </ul>
                  </ul>
                </ul>
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

NewUsers.propTypes = {
  usersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    requestCreateUsers: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ usersReducer }) {
  return {
    usersList: usersReducer.usersList,
  };
}

export default connect(mapStateToProps)(NewUsers);
