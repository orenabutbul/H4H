import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function UserSelectionPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleUserSelect = (userType) => {
    switch(userType) {
      /*case 'volunteer':
        navigate('/donation-request');
        break;
      */
      case 'foodbank':
        navigate('/restaurant-donation-form');
        break;
      case 'restaurant':
        navigate('/restaurant');
        break;
      default:
        console.log('Invalid user type:', userType);
    }
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
      <button onClick={() => handleUserSelect('foodbank')}>Login as Foodbank</button>
      <button onClick={() => handleUserSelect('restaurant')}>Login as Restaurant/Grocery Store</button>
      
      <button onClick={handleLogout}>Logout</button> {/* Add logout button */}
    </div>
  );
}

export default UserSelectionPage;