import logo from './logo.svg';
import './App.css';
import RestaurantDonationForm from './/Components/donations/RestaurantDonationForm.js';
import DonationRequest from './/Components/donations/DonationRequest.js';

function App() {
  return (
    <div>
      <RestaurantDonationForm />
      <DonationRequest />
    </div>
  );
}

export default App;
