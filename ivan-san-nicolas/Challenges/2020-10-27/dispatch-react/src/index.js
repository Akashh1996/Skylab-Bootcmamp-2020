import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Dashboard from './components/dashboard/Dashboard';
//import Detail from './components/detail/Detail';
//import Aside from './components/aside/Aside';
import ConditionalDisplay from './components/ConditionalDisplay';

// <Dashboard />
// <Detail />

let isVisible = false;  

ReactDOM.render(
  <React.StrictMode>
    <ConditionalDisplay isVisible={isVisible}>
      <h1>Skylab mola molt!</h1>
      </ConditionalDisplay>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
