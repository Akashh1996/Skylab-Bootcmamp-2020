import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './FormUser.css'
import { loadUsers, createUser } from '../../src/redux/actions/usersActions';

function FormUser({userList, dispatch}) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [code, setCode] = useState('');
    const [countryName, setCountryName] = useState('');

    useEffect(() => {
        if(!userList && !userList?.length){
          dispatch(loadUsers());
      }},[dispatch, userList?.length, userList])

return (
    <div id="form-container">
        <label htmlFor="name">
            Name
            <input type="text" id="name" onChange={(event) => {setName(event.target.value)}}></input>
        </label>
        <label htmlFor="name">
            Age
            <input type="text" id="age" onChange={(event) => {setAge(event.target.value)}}></input>
        </label>
        <label htmlFor="name">
            Street
            <input type="text" id="street" onChange={(event) => {setStreet(event.target.value)}}></input>
        </label>
        <label htmlFor="name">
            Number
            <input type="text" id="number" onChange={(event) => {setNumber(event.target.value)}}></input>
        </label>
        <label htmlFor="name">
            City
            <input type="text" id="city" onChange={(event) => {setCity(event.target.value)}}></input>
        </label>
        <label htmlFor="name">
            Country code
            <input type="text" id="code" onChange={(event) => {setCode(event.target.value)}}></input>
        </label>
        <label htmlFor="name">
            Country name
            <input type="text" id="countryName" onChange={(event) => {setCountryName(event.target.value)}}></input>
        </label>
        <button type="button" onClick={() => 
            dispatch(createUser({
                name,
                age,
                address: {
                    street,
                    number,
                    city,
                    country: {
                        code,
                        countryName
                    }
                }
            }))
        }>Add User</button>
        
        <h1>Users</h1>
        {(userList &&
          userList.map((user) => (
          <li key={user._id}>{user.name}</li>
        )))}
    </div>
    
)
}
function mapStateToProps({usersReducer}) {
    return {
        userList: usersReducer.userList,
    };
  }
  export default connect(mapStateToProps)(FormUser);