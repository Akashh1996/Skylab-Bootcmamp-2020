import React from 'react';
import '../../TohStyles.css';
import { Link } from 'react-router-dom';

function DashboardTop({ heroId, heroName }) {
	return (
		<Link to={`/Detail/${heroId}`}>
			<button className="top-hero">{heroName}</button>
		</Link>
	);
}

export default DashboardTop;
