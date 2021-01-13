import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA1k-9EionYwRgeePVd5hbifPmrXCqrfm0',
  authDomain: 'mariatcha-5ce7d.firebaseapp.com',
  projectId: 'mariatcha-5ce7d',
  storageBucket: 'mariatcha-5ce7d.appspot.com',
  messagingSenderId: '11714986581',
  appId: '1:11714986581:web:0558ed48ac3cc87b6e8adc',
};

firebase.initializeApp(firebaseConfig);

firebase.auth();
