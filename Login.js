import React from 'react';
import './Login.css';
import logo from './logo.png'; 

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
    <div className='login-page'>
      <div className='logo'>
        <img src={logo} alt="logo for our company" />
      </div>
      <div className='loginHeadAndButton'> 
        <div className='login-header'>
          <p>FoodBridge: Connecting Communities, Fighting Hunger</p>
        </div>
        <button className='login-button' onClick={handleGoogleLogin}>Login with Google</button>
      </div>
      <nav className='navigation'>
        <button className='donate-button' onClick={handleGoogleLogin}>Donate</button>
        <button className='about-us' onClick={handleGoogleLogin}>About Us</button>
        <button className='contact' onClick={handleGoogleLogin}>Contact Us</button>
        <button className='Learn-More' onClick={handleGoogleLogin}>Learn More</button>
      </nav>
  
      <div className='purpose-page'>
        <div className='purpose'>
          <h3>Our Purpose</h3>
          <p> 
            Our purpose is simple yet powerful: to connect food providers like grocery stores and restaurants with food banks in order to redistribute surplus food to those in need. By doing so, 
            we're not only reducing waste but also ensuring that nutritious meals reach individuals and families facing food insecurity.
          </p> 
        </div>
        <div className='lady-image'>
          <img src="https://th.bing.com/th/id/OIG3.3wDKiRzf0ECPu7JnkKc1?pid=ImgGn" alt="lady in the trash" />
        </div>
      </div>
  
      <div className='mission-page'>
        <div className='mission'>
          <h3>Our Mission</h3>
          <p>
            At FoodBridge, we believe in the transformative power of technology to drive positive change. 
            Through our platform, businesses can easily donate excess inventory, while food banks can 
            efficiently distribute these donations to communities in need.
          </p>
        </div>
        <div className='stat'> 
          <img src="https://echonet.org/wp-content/uploads/2020/03/821_4.png" alt="stats of hungry peeps" />          
        </div>
      </div>
    </div>
  );
}

export default Login;
