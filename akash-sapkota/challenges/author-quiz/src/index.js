import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import AuthorImage from './author-image/AuthorImage';
import Answers from './Answers/Answers';

let options = {
	options1: 'The shining',
	options2: 'The adventures by the author shown',
	options3: 'MacBeth',
	options4: 'IT'
};

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<AuthorImage img="https://cdn.britannica.com/74/177874-131-62098C6C/Jules-Verne.jpg" />
		<Answers options={options} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
