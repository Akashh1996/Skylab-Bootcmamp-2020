import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { requestUsers, createUser } from '../../redux/actions/user-actions';
import './Users.css';

function Users({ users, dispatch }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNNumber] = useState('');
  const [city, setCity] = useState('');
  const [code, setCountryCode] = useState('');
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    if (!users && !users?.length) {
      dispatch(requestUsers());
    }
  }, [users?.length]);

  return (
    <>
      <main>
        <div className="input-wrapper">
          <label htmlFor="name">
            Name
            <input type="text" id="name" onChange={(event) => setName(event.target.value)} />
          </label>
          <label htmlFor="name">
            Age
            <input type="Number" id="name" onChange={(event) => setAge(event.target.value)} />
          </label>
          <label htmlFor="name">
            Street
            <input type="text" id="name" onChange={(event) => setStreet(event.target.value)} />
          </label>
          <label htmlFor="name">
            Number
            <input type="text" id="name" onChange={(event) => setNNumber(event.target.value)} />
          </label>
          <label htmlFor="name">
            City
            <input type="text" id="name" onChange={(event) => setCity(event.target.value)} />
          </label>
          <label htmlFor="name">
            Country Code
            <input type="text" id="name" onChange={(event) => setCountryCode(event.target.value)} />
          </label>
          <label htmlFor="name">
            Country name
            <input type="text" id="name" onChange={(event) => setCountryName(event.target.value)} />
          </label>
          <Button
            className="button-submit"
            variant="secondary"
            onClick={() => {
              dispatch(createUser({
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

              }));
            }}
          >
            Submit

          </Button>

        </div>
        <ul>
          {users && users.length > 0 && users.map((user) => (

            <li key={user._id}>
              {' '}
              <Card className="user-card">
                <Card.Header>{user.name}</Card.Header>
                <Card.Body>
                  Age:
                  {' '}
                  {user.age}
                  <Card.Text>
                    Address:
                    {' '}
                    {user.address.street}
                    {' '}
                    City:
                    {' '}
                    {user.address.city}
                    {' '}
                    Country:
                    {' '}
                    {user.address.country.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
function mapStateToProps(state) {
  return {
    users: state.userReducer.users,
  };
}

export default connect(mapStateToProps)(Users);
