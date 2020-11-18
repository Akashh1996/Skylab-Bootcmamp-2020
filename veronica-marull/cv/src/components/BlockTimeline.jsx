import React from 'react';
import './blockTimeline.css';

function BlockTimeline({ title, year, place, titleDescription, description }) {
	return (
		<>
			<div className="title">
				<h3 className="title">{title}</h3>
			</div>
			<div className="block">
				<div className="left">
					<h5>{year}</h5>
					<span>{place}</span>
				</div>

				<div className="right">
					<h4>{titleDescription}</h4>
					<p>{description}</p>
				</div>
			</div>
		</>
	);
}

export default BlockTimeline;
