import React from 'react';
import './Login.css';
import bridge from './foodBridge.png';

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
      <div className='loginHeadAndButton'> 
        <div className='login-header'>
          <p id='one'>FoodBridge:</p>
          <p id='two'>Connecting Communities, Fighting Hunger</p>
        </div>
        <button className='login-button' onClick={handleGoogleLogin}>Login with Google</button>
      </div>
      
      <nav className='navigation'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#' className='donate-button' onClick={() => {}}>Donate</a>
        <a href='#cont' className='contact' onClick={() => {}}>Contact Us</a>
        <a href='#purp' className='Learn-More' onClick={() => {}}>Learn More</a>
        <a href='#missionP' className='about-us' onClick={() => {}}>About Us</a>
      </nav>

      <div className='secondLogo'>
        <img src={bridge} alt='bridge logo' />
      </div>
      <div className='purpose-page'>
        <div className='purpose' id='purp'>
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
  
      <div className='mission-page' id='missionP'>
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

      <div className='contact' id='cont'>
        <h1>Meet Our Team!</h1>
        <h3>Dev Thakar</h3>
        <p>Email: dthakar@scu.edu</p>

        <h3>Vignesh Senthilkumar</h3>
        <p>Email: vsenthilkumar@scu.edu</p>

        <h3>Krish Ananth</h3>
        <p>Email: kananth@scu.edu</p>

        <h3>Jayden Malhotra</h3>
        <p>Email: jmalhotra@scu.edu</p>

        <h3>Oren Abutbul</h3>
        <p>Email: oabutbul@scu.edu </p>

        <h3>Addison Hoff</h3>
        <p>Email:</p>
            
        </div>
    </div>
  );
}

export default Login;
