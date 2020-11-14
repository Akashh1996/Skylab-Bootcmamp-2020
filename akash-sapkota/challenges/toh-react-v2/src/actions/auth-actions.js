import './firebase/firebaseIndex';
import firebase from 'firebase';
import dispatcher from '../dispatcher/dispatcher';
export async function signIn(email, password) {
	try {
		debugger;
		const { user } = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);
		dispatcher.dispatch({
			type: 'AUTH_LOGIN',
			payload: {
				displayName: user.displayName,
				email: user.email,
				phoneNumber: user.phoneNumber,
				photoURL: user.photoURL
			}
		});
	} catch (error) {
		dispatcher.dispatch({
			type: 'AUTH_LOGIN_ERROR'
		});
	}
	return;
}
export async function signOut() {
	try {
		await firebase.auth().signOut();
		dispatcher.dispatch({
			type: 'AUTH_LOGOUT'
		});
	} catch (error) {
		dispatcher.dispatch({
			type: 'AUTH_LOGOUT_ERROR'
		});
	}
}
