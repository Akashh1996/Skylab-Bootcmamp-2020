import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import Main from './components/main';
import configureStore from './store/storeAstartes';
import reportWebVitals from './reportWebVitals';

const store = configureStore({ weaponsReducer: { weapons: [] } });
ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<Main />
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
