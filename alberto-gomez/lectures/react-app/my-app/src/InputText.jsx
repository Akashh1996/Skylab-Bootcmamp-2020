import React, { useEffect, useState } from 'react';
import { loadHero } from './actions/actions-creator';
import heroStore from './stores/hero-store';

function InputText() {
	const [hero, setHero] = useState(heroStore.getHero());
	const [id, setId] = useState(hero?.id);
	const [name, setName] = useState(hero?.name);

	useEffect(() => {
		heroStore.addEventListener(onChange);
		if (!hero) {
			loadHero();
		}

		return () => {
			heroStore.removeEventListener(onChange);
		};
	}, [hero]);

	function onChange() {
		const hero = heroStore.getHero();
		setHero(hero);
		setId(hero?.id);
		setName(hero?.name);
	}

	function handleChange({ target: { value } }, setValue) {
		setValue(value);
	}

	return (
		<>
			<p>
				id:
				<input
					type="text"
					value={id}
					onChange={(event) => handleChange(event, setId)}
				/>
			</p>

			<p>
				name:
				<input
					type="text"
					value={name}
					onChange={(event) => handleChange(event, setName)}
				/>
			</p>
		</>
	);
}

export default InputText;
