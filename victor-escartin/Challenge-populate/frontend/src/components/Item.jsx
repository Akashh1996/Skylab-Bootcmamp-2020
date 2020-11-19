/* eslint-disable no-nested-ternary */
/* eslint-disable no-debugger */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormItem from './FormItem';
import { listUsers } from '../actions/userActions';

function Item() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div>LOADING</div>
      ) : error ? (
        <div>DATA NOT FOUND</div>
      ) : (
        <div className="container m-5">
          <ul>
            {users.map((user) => (
              <li>
                <FormItem key={user._id} user={user} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Item;
