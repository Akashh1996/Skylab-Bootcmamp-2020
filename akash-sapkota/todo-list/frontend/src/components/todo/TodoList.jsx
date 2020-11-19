import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import addTodo, { loadTodo } from '../../redux/actions/todoAction';

function TodoList({ actions, todoList }) {
  const [newTodo, setNewTodo] = useState('');
  useEffect(() => {
    actions.loadTodo();
  }, [todoList?.length]);
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
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,

};

function mapStateToProps(state) {
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
