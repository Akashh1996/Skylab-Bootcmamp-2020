import dispatcher from '../dispatcher';

const hero = {
	id: 12,
	name: 'Narco',
	lastname: 'Traficante'
};

export function loadHero() {
	debugger;
	dispatcher.dispatch({
		type: 'LOAD_HERO',
		data: hero
	});
}
