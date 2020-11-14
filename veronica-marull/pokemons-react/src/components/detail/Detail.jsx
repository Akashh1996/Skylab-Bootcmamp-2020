import React, { useEffect, useState } from 'react';
import pokeStore from '../../stores/store';
import { getPokemonsDetail } from '../../actions/actions';
import { useParams } from 'react-router';

function Detail() {
	// We can use the `useParams` hook here to access
	// the dynamic pieces of the URL.
	let { pokeName } = useParams();
	console.log('blabla');

	/*
	const [detail, setDetail] = useState(pokeStore.getDetail());

	function handleChange() {
		setDetail(pokeStore.getDetail());
	}

	useEffect(() => {
		pokeStore.addEventListener(handleChange);
		if (!detail) {
			getPokemonsDetail();
		}
		return () => {
			pokeStore.removeEventListener(handleChange);
		};
    }, [detail]);
    */
	return <p>{pokeName}</p>;
}

export default Detail;
