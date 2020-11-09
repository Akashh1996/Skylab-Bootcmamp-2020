import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import HeroesList from './components/HeroesList';
import store from './store';

const dashboard = store.getTopHeroes();
const heroesList = store.getHeroes();
const hero = store.getHeroById(4);

ReactDOM.render(
	<React.StrictMode>
		<Header title="" />
		<HeroesList list={heroesList} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
