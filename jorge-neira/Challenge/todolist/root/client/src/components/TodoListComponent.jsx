/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
  loadTodos, addTodo, deleteTodo, updateTodo,
} from '../redux/actions/todosActions';
import CreateTodoListItems from './CreateTodoListItemsComponent';

function TodoListComponent({ todoItems, actions }) {
  debugger;
  const [inputTodo, setInputTodo] = useState('Todo Description');
  actions.loadTodos();

  useEffect(() => {
    if (todoItems.length < 0) {
      debugger;
    }
  }, []);

  return (
    <>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <input
        type="text"
        value={inputTodo}
        onChange={(event) => setInputTodo(event.target.value)}
        onClick={() => setInputTodo('')}
      />
      <button type="submit">Submit</button>
      {todoItems.length > 0 && todoItems.map(() => <CreateTodoListItems />)}
    </>
  );
}

TodoListComponent.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    loadTodos: PropTypes.func.isRequired,
  }).isRequired,
};

TodoListComponent.defaultProps = {
  todoItems: [],
};

function mapStateToProps({ todosReducer }) {
  const {
    todos, newTodo, updatedTodo, deletedTodo,
  } = todosReducer;
  debugger;
  return {
    todoItems: todos,
    addTodo: newTodo,
    updateTodo: updatedTodo,
    deleteTodo: deletedTodo,
  };
}
function mapDispatchToProps(dispatch) {
  debugger;
  return {
    actions: bindActionCreators({
      loadTodos, addTodo, deleteTodo, updateTodo,
    }, dispatch),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
