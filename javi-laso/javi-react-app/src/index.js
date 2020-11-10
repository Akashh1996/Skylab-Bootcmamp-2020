import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TextInput from './components/TextInput';

ReactDOM.render(
	<React.StrictMode>
		<TextInput />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
