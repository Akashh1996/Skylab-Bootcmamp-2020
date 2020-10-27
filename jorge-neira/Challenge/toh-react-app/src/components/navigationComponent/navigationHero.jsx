/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './navigationHero.css';

class NavigationHero extends React.Component {
	render() {
		return (
			<header className="nav-container">
				<h1 className="nav-title">Tour of heroes</h1>
				<nav className="nav-buttons">
					<button className="nav-button">
						<a href="#">Dashboard</a>
					</button>
					<button className="nav-button">
						<a href="#">heroes</a>
					</button>
				</nav>
			</header>
		);
	}
}

export default NavigationHero;
