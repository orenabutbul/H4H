// src/components/DonationButton.js
import React from 'react';
import { useNotifications } from '..//Contexts/NotificationContext.js';

const DonationButton = () => {
  const { triggerNotification } = useNotifications();

  const handleClick = () => {
    triggerNotification('New Food Donation Available');
  };

  return <button onClick={handleClick}>Notify Food Banks</button>;
};

export default DonationButton;
