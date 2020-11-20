import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import UserList from './components/userList/userList';

const userStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={userStore}>
      <UserList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
