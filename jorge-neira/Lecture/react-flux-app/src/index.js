import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import HeaderNavigation from './view/components/header/HeaderNavComponent';
import Dashboard from './view/components/dashboard/DashboardHeroesComponent';
import DetailHero from './view/components/detail/DetailHeroComponent';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<HeaderNavigation />
			<Route path="/" exact component={Dashboard} />
			<Route path="/hero/detail/:id" component={DetailHero} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
