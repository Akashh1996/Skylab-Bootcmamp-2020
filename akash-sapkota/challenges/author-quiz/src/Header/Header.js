import React from 'react';
import './header.css';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<h1>Author Quiz</h1>
				<p>Select the book written by the author below</p>
			</header>
		);
	}
}

export default Header;
