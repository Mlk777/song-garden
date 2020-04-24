import authReducer from './authReducer';
import songReducer from './songReducer';
import genreReducer from './genreReducer';

import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  song: songReducer,
  genre: genreReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
