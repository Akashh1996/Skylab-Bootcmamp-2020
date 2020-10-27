import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DasboardHero from './components/dashboardComponent/dashboardHero';
import DetailHero from './components/detailComponent/detailHero';
import ListHero from './components/listComponent/listHero';
import Sum from './components/sum';
const props = {
	a: 4,
	b: 5,
	showAlert: function () {
		console.log('hola');
	}
};
ReactDOM.render(
	<React.StrictMode>
		React.createElement({(Sum, props, null)})
		<DasboardHero />
		<DetailHero />
		<ListHero />
	</React.StrictMode>,
	document.getElementById('root')
);
