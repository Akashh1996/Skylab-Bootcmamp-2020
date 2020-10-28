import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import HeroDetail from './detail/HeroDetail';

ReactDOM.render(
	<React.StrictMode>
		<HeroDetail />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
