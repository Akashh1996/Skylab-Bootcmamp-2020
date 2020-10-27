import React from 'react';
import './header.css';

class HeaderAuthor extends React.Component {
	render() {
		return (
			<header className="header-container">
				<h1 className="title">Author Quiz</h1>
				<p>Select the book written by the author showns</p>
			</header>
		);
	}
}

export default HeaderAuthor;
