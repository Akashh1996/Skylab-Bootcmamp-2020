import dispatcher from '../dispatcher';

const hero = {
	id: 45,
	name: 'Narco',
	lastname: 'Traficante'
};

export function loadHero() {
	dispatcher.dispatch({
		type: 'LOAD_HERO',
		data: hero
	});
}
