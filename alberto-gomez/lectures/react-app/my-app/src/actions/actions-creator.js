import dispatcher from '../dispatcher';

const hero = {
	id: 12,
	name: 'Narco'
};

export function loadHero() {
	debugger;
	dispatcher.dispatch({
		type: 'LOAD_HERO',
		data: hero
	});
}
