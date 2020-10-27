import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TourOfHeroes from './ToH';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import DashBoard from './Dashboard';
import Detail from './Detail';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<TourOfHeroes />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
