import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeroList from './components/HeroList'
import TopHeroes from './components/Dashboard'
import DetailHero from './components/Detail'
import Header from './components/Header'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <DetailHero />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
