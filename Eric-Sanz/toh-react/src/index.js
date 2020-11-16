import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './TohStyles.css';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import List from './List/List';
import Detail from './Detail/Detail';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Dashboard />
    <List />
    <Detail />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
