import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './redux/configureStore';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';

const userStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={userStore}>
      <Header />
      <UserList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
