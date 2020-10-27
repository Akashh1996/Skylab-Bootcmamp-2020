import React from 'react';
import ReactDOM from 'react-dom';
import ClickCounter from './Click';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Sum from './Sum';

const props = {
  a: 6,
  b: 2
}

ReactDOM.render(
  <React.StrictMode>
    <Sum {...props}/>
   <ClickCounter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
