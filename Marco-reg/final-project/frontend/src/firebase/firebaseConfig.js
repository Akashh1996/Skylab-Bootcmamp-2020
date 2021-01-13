import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDZ47kWyh51pVo7LVbUloOsUUysWvocKfY',
  authDomain: 'spot-shove-it.firebaseapp.com',
  projectId: 'spot-shove-it',
  storageBucket: 'spot-shove-it.appspot.com',
  messagingSenderId: '737421709031',
  appId: '1:737421709031:web:836a08a0577af06a1e5c42',
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
