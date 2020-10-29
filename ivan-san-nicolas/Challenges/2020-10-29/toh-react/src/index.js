import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import HeroList from './components/HeroList';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';
import Header from './components/Header';

import reportWebVitals from './reportWebVitals';

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

reportWebVitals();
