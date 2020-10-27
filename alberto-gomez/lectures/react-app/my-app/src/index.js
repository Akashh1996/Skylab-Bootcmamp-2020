import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InputText from './InputText';
/* import ConditionalDisplay from './ConditionalDisplay';
 */
/* const props = {
	a: 4,
	b: 2,
	showAlert: function (a, b) {
		alert(`El resultado es ${a + b}`);
	}
}; */

let isVisible = false;
ReactDOM.render(
	<React.StrictMode>
		{/* <ConditionalDisplay isVisible={isVisible}>
			<div>La suma es 0</div>
			<span>La suma es mayor que 0</span>
		</ConditionalDisplay> */}
		<InputText />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
