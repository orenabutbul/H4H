// src/components/Notification.js
import React from 'react';
import { useNotifications } from '../Contexts/NotificationContext';

const Notification = () => {
  const { notification } = useNotifications();

  if (!notification) return null;

  return (
    <div className="notification">
      {notification}
    </div>
  );
};

export default Notification;
