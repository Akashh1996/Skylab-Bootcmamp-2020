import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import GithubList from '../src/components/GithubList'
import configureStore from '../src/redux/configureStore';
import { Provider } from 'react-redux';
import {requestLoadGitHub} from './redux/actions/github-actions'

const githubStore = configureStore();

githubStore.dispatch(requestLoadGitHub())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={githubStore}>
    <GithubList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
