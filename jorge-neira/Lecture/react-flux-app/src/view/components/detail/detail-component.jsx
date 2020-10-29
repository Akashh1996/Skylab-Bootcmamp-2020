import React from 'react';

export default function DetailHero() {
	return (
		<section className="detail-container">
			<h2 className="heroTitle">details!</h2>
			<div>
				<span className="heroInfo heroInfo-input-wrapper">
					Name:
					<input className="heroInput" type="text" defaultValue="test"></input>
				</span>
			</div>
			<div>
				<span className="heroInfo heroInfo-input-wrapper">
					id:
					<input className="heroInput" type="text" defaultValue="testa"></input>
				</span>
			</div>

			<button className="backButton">Back</button>
		</section>
	);
}
