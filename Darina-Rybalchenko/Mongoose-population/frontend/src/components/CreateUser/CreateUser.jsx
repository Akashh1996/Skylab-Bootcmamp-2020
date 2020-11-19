import React from 'react';

function CreateUser() {
  return (
    <div>
      <label htmlFor="name">
        Name
        <input type="text" id="name" />
      </label>
      <label htmlFor="age">
        Age
        <input type="text" id="age" />
      </label>
      <label htmlFor="street">
        Street
        <input type="text" id="street" />
      </label>
      <label htmlFor="city">
        City
        <input type="text" id="city" />
      </label>
      <label htmlFor="code">
        Country Code
        <input type="text" id="code" />
      </label>
      <label htmlFor="name">
        Country name
        <input type="text" id="name" />
      </label>
      <button type="button">Submit</button>

    </div>
  );
}

export default CreateUser;
