import React from 'react';

function Dashboard() {
	return (
		<div class="container1">
			<div class="container1-1">
				<h1>
					<b>Tour of Heroes</b>
				</h1>
				<br />
				<div class="buttons">
					<div class="button" id="dashboard-btn">
						<a href="../dashboard/dashboard.html">Dashboard</a>
					</div>
					<div class="button" id="heroes-btn">
						<a href="../heroes/heroes.html">Heroes</a>
					</div>
				</div>
				<br />
				<br />
				<h2>Top Heroes</h2>
				<div class="top-heroes" id="top-heroes__list">
					{' '}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
