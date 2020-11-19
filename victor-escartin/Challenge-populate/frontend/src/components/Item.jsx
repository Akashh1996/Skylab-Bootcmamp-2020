/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormItem from './FormItem';

import '../styles/Item.css';

function Item() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/users');
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container m-5">
      <ul>
        {users.map((user) => (
          <li>
            <FormItem key={user._id} user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Item;
