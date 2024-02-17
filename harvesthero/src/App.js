import logo from './logo.svg';
import './App.css';
import RestaurantDonationForm from './/Components/donations/RestaurantDonationForm.js';
import DonationRequest from './/Components/donations/DonationRequest.js';
import { NotificationProvider } from './Contexts/NotificationContext';
import Notification from './/Components/Notfication.js';

import DonationButton from './Components/DonationButton'; 
function App() {
  return (
    <NotificationProvider>
    <div>
      <Notification /> {/* This will display notifications */}
      <DonationButton />
      <RestaurantDonationForm />
      <DonationRequest />
    </div>
    </NotificationProvider>

  );
}

export default App;
