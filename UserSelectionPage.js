import React, { useEffect } from 'react';
import { auth } from './firebase'; // Import the auth variable from firebase.js
import './UserSelection.css';

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
    <div className='page'>
      <button className='logout' onClick={handleLogout}>Logout</button>{}
      <h2 id='head'>Welcome to FoodBridge!</h2>
      <p className='text1'>Thank you for joining us in the fight against hunger. Your participation makes a real difference in the lives of 
        those in need. Before we get started, please take a moment to choose your role:</p>

      <div className='flex-container'>
        <div className='flex-item'> 
          <div className='vulImage'>
            <img src="https://t4.ftcdn.net/jpg/00/32/06/91/360_F_32069160_96JpOLqNYK15MBN3UPlXBpZjuj3HyGqx.jpg" alt="Volunteer" />
          </div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className='option' href="#" onClick={() => handleUserSelect('volunteer')}>Login as Volunteer</a>
          <p className='text'>Volunteers are the heart of our organization. By giving your time and energy, you help us distribute food to those in need, 
            organize events, and raise awareness about food insecurity. Every act of kindness, no matter how small, contributes to our mission.</p>
        </div>

        <div className='flex-item'> 
          <div className='foodBImage'>
            <img src='https://img.freepik.com/free-vector/hand-drawn-food-bank-illustration_23-2149323304.jpg' alt="foodBank" />
          </div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className='option' href="#" onClick={() => handleUserSelect('foodbank')}>Login as Foodbank</a>
          <p className='text'>As a food bank, you are at the forefront of the battle against hunger. Your dedication to collecting, sorting, 
            and distributing food to those in need is invaluable. Together, we can ensure that no one goes hungry in our community.</p>
        </div>

        <div className='flex-item'>  
          <div className='groceryImage'>
            <img src='https://earmata.com/wp-content/uploads/2021/10/Grocery-Store.jpg' alt="grocery" />
          </div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className='option' href="#" onClick={() => handleUserSelect('restaurant')}>Login as Restaurant/Grocery Store</a>
          <p className='text'>As a food provider, you play a crucial role in reducing food waste and ensuring that nutritious meals reach individuals 
            and families facing food insecurity. Whether you're a restaurant, grocery store, or other food-related business, your donations make a 
            tangible impact on your community.</p>
        </div>

      </div>
      <h3>Choose your role and make a difference today!</h3>
    </div>
  );
}

export default UserSelectionPage;
