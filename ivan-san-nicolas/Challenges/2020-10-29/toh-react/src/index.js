import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import HeroList from './components/HeroList';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';
import Header from './components/Header';
import NotFound from './components/NotFound';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<hr />
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/heroes" exact component={HeroList} />
				<Route path="/heroes/:heroId" exact component={HeroDetail} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
