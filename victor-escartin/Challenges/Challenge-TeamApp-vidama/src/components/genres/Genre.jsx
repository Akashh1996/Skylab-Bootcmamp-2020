import React from 'react';
import './genre.css';
// cambio
function Genre({ articles }) {
	return (
		<article className="genre-wrapper">
			<div className="genre-container">
				<img
					className="genre-image"
					src={articles.firstArticle.image}
					alt="Genre"
				/>
				<div className="genre-title-and-button-container">
					<h3 className="genre-title">{articles.firstArticle.title}</h3>
					<button className="see-genre-button">See genre</button>
				</div>
			</div>
			<div className="genre-container">
				<div className="genre-title-and-button-container">
					<h3 className="genre-title">{articles.secondArticle.title}</h3>
					<button className="see-genre-button">See genre</button>
				</div>
				<img
					className="genre-image"
					src={articles.secondArticle.image}
					alt="Genre"
				/>
			</div>
		</article>
	);
}

export default Genre;
