import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<h1 class="main-title">Tour of Heroes</h1>
			<nav>
				<Link class="nav-buttons" to="/">
					Dashboard
				</Link>
				<Link class="nav-buttons" to="/heroes">
					Heroes
				</Link>
			</nav>
		</header>
	);
}

export default Header;
