import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  requestAddItem, requestDeleteItem, requestList,
} from '../actions/toDoActions';

function ToDoList({ list, dispatch }) {
  const [newItem, setnewItem] = useState('');

  useEffect(() => {
    if (!list || !list?.length) {
      dispatch(requestList());
    }
  }, [list?.length]);

  return (
    <div className="list-container">
      <input
        onChange={(event) => setnewItem(event.target.value)}
        value={newItem}
        placeholder="Enter a new item"
      />
      <button type="button" onClick={() => dispatch(requestAddItem(newItem))}>Add</button>

      {(!list || !list.length) && <h1>There is no list!</h1>}

      <ol>
        {list && list.length > 0 && list.map((item) => (
          <>
            <li>
              <span>
                {item.description}
              </span>
              <button value={item.description} type="button" onClick={() => dispatch(requestDeleteItem(item))}>x</button>
            </li>
          </>
        ))}
      </ol>
    </div>

  );
}

ToDoList.propTypes = {
  list: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.shape(() => {}).isRequired,
  actions: PropTypes.shape({
    requestAddItem: PropTypes.func.isRequired,
    requestDeleteItem: PropTypes.func.isRequired,
    requestList: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ toDoReducer }) {
  return {
    list: toDoReducer.list,
  };
}

export default connect(mapStateToProps)(ToDoList);
