import React from 'react';

function Header() {
	return (
		<header className="header__main">
			<h1 className="header__title">Tour of Heroes</h1>

			<button className="header__button">
				<a href="#">Dashboard</a>
			</button>

			<button className="header__button">
				<a href="#">Heroes</a>
			</button>
		</header>
	);
}

export default Header;
