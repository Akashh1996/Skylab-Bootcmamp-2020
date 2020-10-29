import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { loadHeroById } from '../../../actions/action-creators';
import heroStore from '../../../stores/hero-store';

function DetailHero() {
	let { id } = useParams();
	const [hero, setHero] = useState(null);

	useEffect(() => {
		heroStore.addEventListener(handleChange);
		if (!hero) {
			loadHeroById(+id);
		}
		return () => {
			heroStore.removeEventListener(handleChange);
		};
	});

	function handleChange() {
		setHero(heroStore.getHero());
	}

	return (
		<>
			{!hero && <h1>{`There is no hero with id: ${id}`}</h1>}
			{hero && (
				<>
					<h2>Hero details!</h2>
					<section>
						<div>
							id: <span>{id}</span>
						</div>
						<div>
							name: <input type="text" value={hero.name} />
						</div>
					</section>
				</>
			)}

			<button>
				<Link to="/">Back</Link>
			</button>
		</>
	);
}

export default DetailHero;
