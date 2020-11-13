import React, { useEffect, useState } from 'react';
import pokeStore from '../../stores/store';
import { pokemonsDetail } from '../../actions/actions';

function Detail() {
	const [detail, setDetail] = useState(pokeStore.getDetail());

	function handleChange() {
		setDetail(pokeStore.getDetail());
	}

	useEffect(() => {
		pokeStore.addEventListener(handleChange);
		if (!detail) {
			pokemonsDetail();
		}
		return () => {
			pokeStore.removeEventListener(handleChange);
		};
	}, [detail]);
}

export default Detail;
