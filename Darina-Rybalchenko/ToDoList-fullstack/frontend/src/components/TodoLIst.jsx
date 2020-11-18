import React from 'react';

function TodoList() {
  return (
    <>
      <header>Todo List</header>
      <main>
        <input id="input_todo" type="text" placeholder="Enter a new name" />
        <button type="button">Add</button>
      </main>

    </>
  );
}

export default TodoList;
