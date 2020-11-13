import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HeroList from './components/HeroList';
import Header from './components/Header.js';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<hr />
			<Route path="/" exact component={Dashboard} />
			<Route path="/heroes" exact component={HeroList} />
			<Route path="/heroes/:heroId" component={HeroDetail} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
