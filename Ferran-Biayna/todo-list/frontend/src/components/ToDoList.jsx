import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import {
  requestAddItem, requestDeleteItem, requestList,
} from '../actions/toDoActions';

function ToDoList({ list, dispatch }) {
  debugger;
  const [newItem, setnewItem] = useState('');

  if (!list || !list?.length || list === 'Deleted Successfully!') {
    dispatch(requestList());
  }

  return (
    <div className="list-container">
      <input
        onChange={(event) => setnewItem(event.target.value)}
        value={newItem}
        placeholder="Enter a new item"
      />
      <button type="button" onClick={() => dispatch(requestAddItem(newItem))}>Add</button>

      {(!list || !list.length) && <h1>There are no list!</h1>}

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
  dispatch: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    requestAddItem: PropTypes.func.isRequired,
    requestDeleteItem: PropTypes.func.isRequired,
    requestList: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ toDoReducer }) {
  debugger;
  return {
    list: toDoReducer.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      requestAddItem, requestDeleteItem, requestList,
    }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
