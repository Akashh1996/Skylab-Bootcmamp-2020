import React from 'react';
import './slider.css';

function Slider() {
	return (
		<article className="gif-wrapper">
			<div className="gif-container">
				<img
					className="gif"
					src={'https://media.giphy.com/media/ESxVxc9HttIDm/giphy.gif'}
					alt=""
				/>
				<span className="gif-text">See our latest books</span>
			</div>
		</article>
	);
}

export default Slider;
