import React, { useEffect, useState } from 'react';
import { auth, googleProvider } from './firebase';
import Login from './Login';
import UserSelectionPage from './UserSelectionPage';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [googleLoggedIn, setGoogleLoggedIn] = useState(false); // New state to track Google login status

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoggedIn(!!user); // Set loggedIn to true if user is not null
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && user.providerData.some(provider => provider.providerId === "google.com")) {
      setGoogleLoggedIn(true); // Set googleLoggedIn to true if user is logged in with Google
    } else {
      setGoogleLoggedIn(false); // Set googleLoggedIn to false if user is not logged in with Google
    }
  }, [user]);

  const handleGoogleLogin = () => {
    auth.signInWithRedirect(googleProvider);
  };

  const handleUserSelect = (userType) => {
    // Handle user selection here, e.g., redirect to a new page
    console.log('Selected user type:', userType);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <Login onGoogleLogin={handleGoogleLogin} />
      ) : googleLoggedIn ? (
        <UserSelectionPage onUserSelect={handleUserSelect} />
      ) : (
        <p>Please log in with Google to proceed.</p>
      )}
    </div>
  );
}

export default App;
