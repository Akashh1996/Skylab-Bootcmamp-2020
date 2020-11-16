import React from 'react';

function Header() {
	return (
		<header id="header">
			<h2>Tour of heroes</h2>
			<nav>
				<button>
					<a class="font-btn" href="#">
						DASHBOARD
					</a>
				</button>
				<button>
					<a class="font-btn" href="#">
						Heroes
					</a>
				</button>
			</nav>
		</header>
	);
}

export default Header;
