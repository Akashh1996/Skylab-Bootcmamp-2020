import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormSection from './components/dashboard/Dashboard';
import Example from './components/store/SelectOptions';
ReactDOM.render(
	<React.StrictMode>
		<Example />
		<FormSection />
	</React.StrictMode>,
	document.getElementById('root')
);
