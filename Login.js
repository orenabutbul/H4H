import React from 'react';
import { auth, googleProvider } from './firebase';

function Login({ onGoogleLogin }) {
  const handleGoogleLogin = () => {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        // Handle successful login if needed
      })
      .catch((error) => {
        // Handle login error if needed
        console.error('Error signing in with Google:', error.message);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
