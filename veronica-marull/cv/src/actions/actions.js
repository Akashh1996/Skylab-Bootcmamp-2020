import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './actionTypes';

export async function loadData() {
	const response = await fetch('..api/data.json');
	const data = await response;

	console.log(data);

	dispatcher.dispatch({
		type: actionTypes.LOAD_DATA,
		payload: data
	});
}
