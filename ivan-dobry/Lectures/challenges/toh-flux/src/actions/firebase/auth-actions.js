import './firebaseIndex';
import firebase from 'firebase';
import dispatcher from '../../dispatcher/dispatcher';
import actionTypes from '../action-types';

export async function signIn(email, password) {
	try {
		const { user } = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);
		dispatcher.dispatch({
			type: actionTypes.AUTH_LOGIN,
			payload: {
				displayName: user.displayName,
				email: user.email
			}
		});
	} catch (error) {
		dispatcher.dispatch({
			type: actionTypes.AUTH_LOGIN_ERROR
		});
	}
}

export async function signOut() {
	try {
	} catch (error) {
		await firebase.auth().signOut();
		dispatcher.dispatch({
			type: actionTypes.AUTH_SIGNOUT
		});
	}
	dispatcher.dispatch({
		type: actionTypes.AUTH_SIGNOUT_ERROR
	});
}
