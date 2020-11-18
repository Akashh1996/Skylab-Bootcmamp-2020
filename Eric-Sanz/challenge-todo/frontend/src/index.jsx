import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import ToDoList from './components/List/ToDoList';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToDoList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
