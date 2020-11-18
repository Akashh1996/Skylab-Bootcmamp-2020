/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import addTodo, { loadTodo } from '../../redux/actions/todoAction';

function TodoList({ actions, todoList }) {
  const [newTodo, setNewTodo] = useState('');
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (!todoList && !todoList?.length) {
      actions.loadTodo();
    }
  }, [todoList]);
  return (
    <div className="wrapper">
      <input
        onChange={(event) => setNewTodo(event.target.value)}
        value={newTodo}
        placeholder="Enter a new Todo"
      />
      <button
        type="button"
        onClick={() => {
          actions.addTodo({ name: newTodo });
          actions.loadTodo();
        }}
      >
        Add

      </button>
      <div className="list">
        {todoList && todoList.length > 0 && todoList.map((todo) => (
          <div>
            {todo.name}
            {' '}
            <button type="button">x</button>
            {' '}

          </div>
        ))}
      </div>
    </div>

  );
}

TodoList.propTypes = {
  actions: PropTypes.shape({
    addTodo: PropTypes.func.isRequired,
    loadTodo: PropTypes.func.isRequired,
  }).isRequired,
  todoList: PropTypes.shape({
    state: PropTypes.shape({ }),
    map: PropTypes.func.isRequired,
  }).isRequired,

};

function mapStateToProps(state) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    todoList: state.todoReducer.todoList,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addTodo, loadTodo }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
