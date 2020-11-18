import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { addTodo, removeTodo, requestTodos } from '../../redux/actions/todoActions';

function TodoList({ todos, actions }) {
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    if (todos.length === 0) {
      actions.requestTodos();
    }
  }, []);

  return (
    <div className="main">
      <h1 className="list-title">TODO LIST</h1>
      <input
        onChange={(event) => setNewTodo(event.target.value)}
        value={newTodo}
        placeholder="Enter a To Do"
      />
      <button
        type="button"
        onClick={() => { actions.addTodo(newTodo); setNewTodo(''); }}
      >
        Add To Do
      </button>
      <div className="todos">
        {todos && todos.length && todos.map((todo) => (
          <div>
            <p style={{ display: 'inline' }} key={Date.now() + Math.random()}>{todo}</p>
            {' '}
            <button
              type="button"
              className="delete-button"
              onClick={() => actions.removeTodo(todo)}
            >
              Remove To Do
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
function mapStateToProps({ todos }) {
  return {
    todos,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addTodo, removeTodo, requestTodos }, dispatch),
  };
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    requestTodos: PropTypes.func.isRequired,
  }).isRequired,
};

TodoList.defaultProps = {
  todos: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
