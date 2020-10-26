import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import DashboardList from './DashboardList';
import HeroesList from './HeroesList';
import Details from './Details';
import store from './store';

const dashboard = store.getTopHeroes();
const heroesList = store.getHeroes();
const hero = store.getHeroById(4);

ReactDOM.render(
	<React.StrictMode>
		<Header title="" />
		<Details hero={hero} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
