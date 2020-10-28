export async function loadHeroes() {
	const response = await fetch('api/heroes.json');
	const heroes = await response.json();
	dispatcher.dispatch({
		type: actionTypes.LOAD_HEROES,
		payload: heroes
	});
}
