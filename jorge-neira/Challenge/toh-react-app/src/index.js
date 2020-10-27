import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DasboardHero from './components/dashboardComponent/dashboardHero';
import DetailHero from './components/detailComponent/detailHero';

ReactDOM.render(
	<React.StrictMode>
		<DasboardHero />
		<DetailHero />
	</React.StrictMode>,
	document.getElementById('root')
);
