import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { addTodoListItem, deleteTodoListItem } from '../redux/actions/todoListActions';

function TodoList({ todoList, actions }) {
  const [newTodoListItem, setNewTodoListItem] = useState('');

  return (
    <>
      <h1 className="title">TODO LIST</h1>
      <input
        onChange={(event) => setNewTodoListItem(event.target.value)}
        value={newTodoListItem}
        placeholder="Enter a new todo list item"
      />
      <button
        type="button"
        className="add-button"
        onClick={() => { actions.addTodoListItem(newTodoListItem); setNewTodoListItem(''); }}
      >
        Add
      </button>
      <div className="todo-list">
        {todoList && todoList.length && todoList.map((todoListItem) => (
          <div>
            <p style={{ display: 'inline' }} key={Date.now() + Math.random()}>{todoListItem.todoListItem}</p>
            {' '}
            <button
              type="button"
              className="delete-button"
              onClick={() => actions.deleteTodoListItem(todoListItem)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function mapStateToProps({ todoList }) {
  return {
    todoList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addTodoListItem, deleteTodoListItem }, dispatch),
  };
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    addTodoListItem: PropTypes.func.isRequired,
    deleteTodoListItem: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
