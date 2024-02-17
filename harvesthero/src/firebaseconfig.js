// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj6RaA4I8ycyBcVDop2qTCuCHSmTk8ERI",
  authDomain: "harvest-hero-d6056.firebaseapp.com",
  projectId: "harvest-hero-d6056",
  storageBucket: "harvest-hero-d6056.appspot.com",
  messagingSenderId: "4469628038",
  appId: "1:4469628038:web:7f53c21b19bebe377cc507",
  measurementId: "G-Y00V1F8GC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
