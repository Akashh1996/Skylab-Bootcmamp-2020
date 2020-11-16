import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import AuthorImage from './author-image/AuthorImage';
import Answers from './Answers/Answers';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<div className="main-content" id="main">
			<AuthorImage img="https://study.com/cimages/multimages/16/mark_twain_1871.jpg" />
			<Answers />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
