import React, { createContext, useContext, useState } from 'react';
import Notification from '../components/Notification';

// Create the context
const NotificationContext = createContext();

// Create a provider component
export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const triggerNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null); // Clear notification after 3 seconds
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ triggerNotification }}>
      {children}
      {notification && <Notification type={notification.type} message={notification.message} />}
    </NotificationContext.Provider>
  );
};

// Custom hook to use the notification context
export const useNotification = () => useContext(NotificationContext);
