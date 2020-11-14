import React, { useState, useEffect } from 'react';
import { loadGenres } from '../../actions/action-creator';
import Genre from './Genre';
import './genres.css';

function Genres() {
	const [genres, setGenres] = useState();

	useEffect(() => {
		if (!genres) {
			setGenres(loadGenres());
		}
	}, [genres]);

	return (
		<section className="genres-section">
			<h2 className="comment-section__title-container">
				<span className="comment-section__title genres-title">Genres</span>
			</h2>
			{genres &&
				genres.map((genre) => {
					return <Genre articles={genre} />;
				})}
		</section>
	);
}

export default Genres;
