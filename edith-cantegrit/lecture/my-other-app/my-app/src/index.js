import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ConditionalDisplay from './ConditionalDisplay'


ReactDOM.render(
  <React.StrictMode>
    <ConditionalDisplay isVisible={true}>
        <div>La suma es 0</div>
        <span>La suma es mayor que 0</span>
    </ConditionalDisplay>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
