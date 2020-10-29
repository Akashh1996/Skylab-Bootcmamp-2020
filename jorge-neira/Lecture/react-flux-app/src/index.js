import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import HeaderNavigation from './view/components/header/HeaderNavComponent';
import Dashbaord from './view/components/dashboard/DashboardHeroesComponent';
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<HeaderNavigation />
			<Dashbaord />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
