import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<>
			<h1>Pokemons</h1>
			<nav className="navbar">
				<Link to="/">Pokemons</Link>
			</nav>
		</>
	);
}

export default Header;
