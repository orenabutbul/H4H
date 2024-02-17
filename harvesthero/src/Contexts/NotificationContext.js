// src/contexts/NotificationContext.js
import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const triggerNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null); // Automatically clear the notification after 5 seconds
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ notification, triggerNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
