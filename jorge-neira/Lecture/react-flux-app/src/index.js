import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import HeaderNavigation from './view/components/header/Header';
import DashboardHeroes from './view/components/dashboard/dashboard-component';
import DetailHero from './view/components/detail/detail-component';
import ListHeroes from './view/components/list/list-component';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<HeaderNavigation />
			<Route path="/" exact component={DashboardHeroes} />
			<Route path="/heroes/detail" exact component={DetailHero} />
			<Route path="/heroes/list" component={ListHeroes} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
