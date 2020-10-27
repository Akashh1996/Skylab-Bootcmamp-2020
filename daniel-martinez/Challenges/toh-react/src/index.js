import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
//import List from './views/List';
//import Detail from './views/Detail';
import Dashboard from './views/Dashboard';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {React.createElement(Header, null, null)}
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
