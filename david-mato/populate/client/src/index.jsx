/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import UserList from './components/UserList';
import { requestUserList } from './redux/actions/userListActions';
import configureStore from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(requestUserList());

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <UserList />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
