import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeroList from './toh-react';
import reportWebVitals from './reportWebVitals';

import { Provider as MiPutoProviderRenombrado } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<MiPutoProviderRenombrado store={store}>
			<HeroList />
		</MiPutoProviderRenombrado>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
