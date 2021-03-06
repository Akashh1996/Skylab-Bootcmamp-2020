import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InputText from './InputText';
import ClickCounter from './ClickCounter';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
	<React.StrictMode>
		<ClickCounter />
		<App />
		<InputText />
	</React.StrictMode>,
	document.getElementById('root')
);

/* import Hello from './Hello'; */
/* import Sum from './Sum'; */

/* const props = {
	a: 4,
	b: 2
};

<Sum a={4} b={2} />
		<Sum {...props} /> */

/* const props = {
	a: 4,
	b: 2,
	showAlert: function (a, b) {
		alert(`El resultado es ${a + b}`);
	}
}; */

/* import ConditionalDisplay from './ConditionalDisplay';
 */

{/* <ConditionalDisplay isVisible={isVisible}>
			<div>La suma es 0</div>
			<span>La suma es mayor que 0</span>
		</ConditionalDisplay> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
