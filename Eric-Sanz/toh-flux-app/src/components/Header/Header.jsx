import React from 'react';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';
// import heroes from './heroes.json';

const heroes = [
	{
		id: 12,
		name: 'Narco'
	}
];

function Header() {
	return (
		<nav className="header-container">
			<h1 className="header-title">Tour of Heroes</h1>
			<Link className="nav-btn" to="/Dashboard">
				Dashboard
			</Link>
			{' | '}
			<Link className="nav-btn" to="/List">
				Heroes
			</Link>
			{' | '}
			<Link className="nav-btn" to={`/detailHero/${heroes[0].id}`}>
				Details
			</Link>
			{' | '}
		</nav>
		// <header className="header-container">
		//     <h1 className="header-title">Tour of Heroes</h1>
		//     <nav>
		//         <button className="nav-btn">Dashboard</button>
		//         <button className="nav-btn">Heroes</button>
		//     </nav>
		// </header>
	);
}

export default Header;
