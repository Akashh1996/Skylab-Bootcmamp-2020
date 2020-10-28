import React, { useEffect, useState } from 'react';
import { loadHero } from '../actions/action-creator';
import heroStore from '../stores/hero-store';

function TextInput() {
	const [hero, setHero] = useState(heroStore.getHero());
	const [id, setId] = useState(hero?.id);
	const [name, setName] = useState(hero?.name);
	const [lastname, setLastName] = useState(hero?.lastname);

	useEffect(() => {
		debugger;
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
		setLastName(hero?.lastname);
	}

	function handleChange(event, setValue) {
		setValue(event.target.value);
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
			<p>
				name:
				<input
					type="text"
					value={lastname}
					onChange={(event) => handleChange(event, setLastName)}
				/>
			</p>
		</>
	);
}
export default TextInput;
