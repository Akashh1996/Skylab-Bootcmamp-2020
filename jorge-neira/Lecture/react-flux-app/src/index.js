import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderNavigation from './view/components/header/Header';
import ListHeroes from './view/components/list/list-component';

ReactDOM.render(
	<React.StrictMode>
		<HeaderNavigation />
		<ListHeroes />
	</React.StrictMode>,
	document.getElementById('root')
);
