import firebase from '@firebase/app';
import '@firebase/database';

// Set up firebase connection to be used globally
export const firebaseConfig = {
  apiKey: 'AIzaSyDihQtkVq1b4ckJ4cA7VWlamd6NYXoNyUI',
  authDomain: 'releaf-28ef7.firebaseapp.com',
  databaseURL: 'https://releaf-28ef7.firebaseio.com',
  projectId: 'releaf-28ef7',
  storageBucket: 'releaf-28ef7.appspot.com',
  messagingSenderId: '791199949734',
  appId: '1:791199949734:ios:a5cb0e7f09fe1068bb6567',
  // measurementId: "G-YRTVSM0ETD",
};

// Avoid multiple initializations
export var firebaseApp;

export function initDefaultFirebaseApp() {
  firebaseApp = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
}

initDefaultFirebaseApp();
