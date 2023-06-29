import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3000');

    
    socket.on('newNotification', comment => {
      
      setNotifications(prevNotifications => [...prevNotifications, comment]);
    });


    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Real-time Notifications</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;
