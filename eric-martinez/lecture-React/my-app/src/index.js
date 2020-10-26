import React from 'react';
import ReactDOM from 'react-dom';
import ClickCounter from './Click';
import './index.css';
import reportWebVitals from './reportWebVitals';

const props = {
  a: 6,
  b: 2
}

ReactDOM.render(
  <React.StrictMode>
   <ClickCounter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
