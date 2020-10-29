import React from 'react';

export default function DetailHero() {
	return (
		<section className="detail-container">
			<h2 className="heroTitle">details!</h2>
			<span className="heroInfo">id: 12</span>
			<span className="heroInfo heroInfo-input-wrapper">
				Name
				<input className="heroInput" type="text" value={'Test'}></input>
			</span>
			<button className="backButton">Back</button>
		</section>
	);
}
