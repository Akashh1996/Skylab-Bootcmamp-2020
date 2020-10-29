import React, { useState, useEffect } from 'react';
import DashboardList from './DashboardList';
import { loadHeroes } from '../actions/hero-actions';
import heroStore from '../stores/hero-store';

function Dashboard() {
	const [heroes, setHeroes] = useState(heroStore.getTopHeroes());

	useEffect(() => {
		heroStore.addEventListener(handleChange);
		document.title = `Principal heroes`;
		if (!heroes) {
			loadHeroes();
		}

		return () => {
			heroStore.removeEventListener(handleChange);
		};
	}, [heroes]);

	function handleChange() {
		setHeroes(heroStore.getTopHeroes());
	}
	return (
		<>
			<h2 className="mb-4">Dashboard</h2>
			<DashboardList list={heroes} />
		</>
	);
}

export default Dashboard;
