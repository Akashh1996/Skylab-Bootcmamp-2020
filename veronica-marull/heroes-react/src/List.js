import React from 'react';

function List() {
	return (
		<body>
			<h1>Tour of Heroes</h1>
			<div class="buttons">
				<div class="button" id="dashboard-btn">
					<a href="../dashboard/dashboard.html">Dashboard</a>
				</div>
				<div class="button" id="heroes-btn">
					<a href="../heroes/heroes.html">Heroes</a>
				</div>
			</div>
			<main>
				<h3>My Heroes</h3>

				<div class="heroesList">
					<div>
						<ul id="list"></ul>
					</div>
				</div>
			</main>
		</body>
	);
}

export default List;
