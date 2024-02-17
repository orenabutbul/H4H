import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCj6RaA4I8ycyBcVDop2qTCuCHSmTk8ERI",
  authDomain: "harvest-hero-d6056.firebaseapp.com",
  projectId: "harvest-hero-d6056",
  storageBucket: "harvest-hero-d6056.appspot.com",
  messagingSenderId: "4469628038",
  appId: "1:4469628038:web:7f53c21b19bebe377cc507"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
