import dispatcher from '../dispatcher';
debugger;
const hero = {
	id: 12,
	name: 'Narco',
	lastname: 'Traficanta'
};

export function loadHero() {
	debugger;
	dispatcher.dispatch({
		type: 'LOAD_HERO',
		data: hero
	});
}
