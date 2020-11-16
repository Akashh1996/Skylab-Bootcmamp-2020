import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import HeroDetails from './components/HeroDetails';
import HeroList from './components/HeroList';
import Dashboard from './components/Dashboard';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Route path="/" exact component={Dashboard} />
			<Route path="/heroes" exact component={HeroList} />
			<Route path="/heroes/:id" component={HeroDetails} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
