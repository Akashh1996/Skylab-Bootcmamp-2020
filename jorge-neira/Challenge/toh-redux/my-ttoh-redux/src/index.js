import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<App />
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);


