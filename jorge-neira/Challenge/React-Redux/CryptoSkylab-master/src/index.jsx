import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CryptoList from './components/CryptoListComponent/CryptoList';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';

const cryptoStore = configureStore({ currencies: [] });

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={cryptoStore}>
			<CryptoList />
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
