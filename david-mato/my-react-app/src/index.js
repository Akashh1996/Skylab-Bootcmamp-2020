import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import Main from './Main/Main'

ReactDOM.render(
  <React.StrictMode>
    <Header title='Author Quiz' instructions='Select the book written by the author shown'/>
    <Main image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg/170px-Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
