// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
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
// Initialize Firestore and export it
const db = getFirestore(app);

// Initialize Firebase Storage and export it
const storage = getStorage(app);

export { db, storage }; // Export the Firestore database instance and Storage
