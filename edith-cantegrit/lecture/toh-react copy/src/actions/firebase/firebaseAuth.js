import './firebaseIndex';
import firebase from 'firebase';

export const authMethods = {
	signIn: (email, password) => firebase.auth().signInWithEmailAndPassword,
	signOut: () => firebase.auth().signOut()
};
