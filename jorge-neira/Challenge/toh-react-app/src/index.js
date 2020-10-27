import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DasboardHero from './components/dashboardComponent/dashboardHero';
import DetailHero from './components/detailComponent/detailHero';
import ListHero from './components/listComponent/listHero';

ReactDOM.render(
	<React.StrictMode>
		<DasboardHero />

		<DetailHero />
		<ListHero />
	</React.StrictMode>,
	document.getElementById('root')
);
