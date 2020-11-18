import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import TodoListComponent from './components/TodoListComponent';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoListComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
