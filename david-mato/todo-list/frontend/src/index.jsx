/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import TodoList from './components/TodoList';
import { requestTodoList } from './redux/actions/todoListActions';
import configureStore from './redux/configureStore';

const store = configureStore();
store.dispatch(requestTodoList());

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <TodoList />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
