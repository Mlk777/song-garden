import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyDF2a3vUY5fDZCWBAs9pj2bpE8y49gvY6s',
  authDomain: 'song-garden.firebaseapp.com',
  databaseURL: 'https://song-garden.firebaseio.com',
  projectId: 'song-garden',
  storageBucket: 'song-garden.appspot.com',
  messagingSenderId: '370953609625',
  appId: '1:370953609625:web:1fedc4bd6ef549495bf308',
  measurementId: 'G-2Y007STCTV',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
