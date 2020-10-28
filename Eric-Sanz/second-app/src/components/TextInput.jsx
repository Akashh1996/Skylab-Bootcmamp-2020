import React, { useEffect, useState } from 'react';
import { loadHero } from '../../../../gilbe-cao/my-react-app/src/actions/action-creators';

function TextInput() {
    const [hero, setHero] = useState(heroStore.getHero());
	const [id, setId] = useState('12');
	const [name, setName] = useState('Narco');
	const [lastname, setLastname] = useState('Traficante');

	useEffect(() => {

        heroStore.addEventListener();
        if (!hero) {
            loadHero();
        }

        heroStore.removeEventListener();

	}, [hero]);

    function onChange {

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
				name:
				<input
					type="text"
					value={name}
					onChange={(event) => handleChange(event, setName)}
				/>
				<input
					type="text"
					value={lastname}
					onChange={(event) => setInputValue(event, setLastname)}
				/>
			</p>
		</>
	);
}

export default TextInput;
