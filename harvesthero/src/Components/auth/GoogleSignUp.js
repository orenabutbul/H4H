// src/components/auth/SignUpForm.js
import React from 'react';
import { auth } from '../utils/firebase.js';
import firebase from 'firebase/app';

const SignUpForm = () => {
  const handleGoogleSignUp = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      // Handle successful signup here, e.g., redirecting to the dashboard
    } catch (error) {
      console.error(error);
      // Handle errors here, such as displaying a notification
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <button onClick={handleGoogleSignUp}>Sign up with Google</button>
    </div>
  );
};

export default SignUpForm;
