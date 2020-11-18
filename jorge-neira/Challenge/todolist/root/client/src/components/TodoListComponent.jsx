import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
  loadTodos, addTodo, deleteTodo, updateTodo,
} from '../redux/actions/todosActions';

function TodoList({ loadedTodos, actions }) {
  const [inputTodo, setInputTodo] = useState('Todo Description');

  if (!loadedTodos) {
    actions.loadTodos();
  }

  return (
    <>
      <div>hola</div>

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
    </>
  );
}

TodoList.propTypes = {
  loadedTodos: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    loadTodos: PropTypes.func.isRequired,
  }).isRequired,
};

TodoList.defaultProps = {
  loadedTodos: [],
};

function mapStateToProps({ todosReducer }) {
  return {
    loadedTodos: todosReducer.loadedTodos,
    addTodo: todosReducer.addTodo,
    updateTodo: todosReducer.updateTodo,
    deleteTodo: todosReducer.deleteTodo,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadTodos, addTodo, deleteTodo, updateTodo,
    }, dispatch),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
