import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Hello from './Hello';
import Sum from './Sum';
// import Clickcounter from './Clickcounter';
import ClickCounter from './Clickcounter';

// const props = {
// 	a: 2,
// 	b: 5
// };

ReactDOM.render(
	<React.StrictMode>
		<ClickCounter />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
