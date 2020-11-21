import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import ProjectList from './components/ProjectList/ProjectList';

const userStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={userStore}>
      <ProjectList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
