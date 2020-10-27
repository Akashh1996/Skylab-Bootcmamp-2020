import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import Form from './FormComponent/Form';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Form />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
