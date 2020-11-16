import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import Main from './Main/Main';
import Sum from './Sum';
import ConditionalDisplay from './ConditionalDisplay';
import Input from './Input';

let isVisible = false;
ReactDOM.render(
	<React.StrictMode>
		<ConditionalDisplay isVisible={isVisible}>
			<p>Hola</p>
		</ConditionalDisplay>
		<Input />
		<Header
			title="Author Quiz"
			instructions="Select the book written by the author shown"
		/>
		<Main image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg/170px-Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg" />
	</React.StrictMode>,
	document.getElementById('root')
);
