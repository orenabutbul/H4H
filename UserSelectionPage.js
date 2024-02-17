import React, { useEffect } from 'react';
import { auth } from './firebase'; // Import the auth variable from firebase.js

function UserSelectionPage({ onUserSelect }) {
  const handleUserSelect = (userType) => {
    onUserSelect(userType);
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        // Log out successful
        console.log('User logged out successfully.');
      })
      .catch((error) => {
        // An error occurred while logging out
        console.error('Error logging out:', error);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in, log a message to the console
        console.log('User logged in successfully.');
      } else {
        // User is not logged in, log a message to the console
        console.log('User is not logged in.');
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []); // Run this effect only once on component mount

  return (
    <div>
      <h2>Select User Type</h2>
      <button onClick={() => handleUserSelect('volunteer')}>Login as Volunteer</button>
      <button onClick={() => handleUserSelect('foodbank')}>Login as Foodbank</button>
      <button onClick={() => handleUserSelect('restaurant')}>Login as Restaurant/Grocery Store</button>
      
      <button onClick={handleLogout}>Logout</button> {/* Add logout button */}
    </div>
  );
}

export default UserSelectionPage;
