import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import myProps from './store/data';
// import App from './App';
// import Hello from './Hello';
// import ClickCounter from './components/ClickCounter';
// import Sum from './components/Sum';
import ConditionalDisplay from './components/ConditionalDisplay';

let isVisible = false;

ReactDOM.render(
	<React.StrictMode>
		<ConditionalDisplay isVisible={isVisible}>
			<h1>Skylab mola!</h1>
		</ConditionalDisplay>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
