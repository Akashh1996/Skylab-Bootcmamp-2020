import dispatcher from '../dispatcher';

const hero = {
	id: 45,
	name: 'Narco',
	lastname: 'Traficante'
};

const selectOptions = {
	options1: 'round-trip',
	option2: 'one-way',
	option3: 'Multi-city'
};

export function loadHero() {
	dispatcher.dispatch({
		type: 'LOAD_HERO',
		data: hero
	});
}

export function loadOptions() {
	dispatcher.dispatch({
		type: 'LOAD_OPTIONS',
		data: selectOptions
	});
}
