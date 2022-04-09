import { useState, useEffect, createContext } from "react";
/////////////////////////////////////////////////////////////

const NotificationData = createContext({
  notification: null,
  hideNotification: () => { },
  showNotification: () => { },
});

export const ProvideNotification = (props) => {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (activeNotification && activeNotification.status !== 'pending') {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      return () => {
        console.log('unmounting');
        clearTimeout(timer);
      }
    }
  }, [activeNotification]);

  const showNotificationHandler = (dataNotification) => {
    setActiveNotification(dataNotification);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    hideNotification: hideNotificationHandler,
    showNotification: showNotificationHandler
  };

  return (
    <NotificationData.Provider value={context}>
      {props.children}
    </NotificationData.Provider>
  )
};

export default NotificationData;
