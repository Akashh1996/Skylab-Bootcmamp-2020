import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './redux/configureStore';
import CreateUser from './components/CreateUser/CreateUser';

const userStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={userStore}>
      <CreateUser />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
