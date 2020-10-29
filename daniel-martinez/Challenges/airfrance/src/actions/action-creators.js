import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './action-types';

export async function loadForm1() {
	const response = await fetch('Form1.json');
	const form = await response.json();
	dispatcher.dispatch({
		type: actionTypes.LOAD_FORM,
		data: form
	});
}
