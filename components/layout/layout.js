import {
  Fragment,
  useContext
} from 'react';
import { MainHeader } from "./main-header";
import Notification from '../../components/ui/notification';
import  NotificationData from '../../store/notification-context';
/////////////////////////////////////////////////////////////////

export const Layout = (props) => {
  const notificationCtx = useContext(NotificationData);
  const notification = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>{
        notification &&
        <Notification title={notification.title} message={notification.message} status={notification.status} />
      }
    </Fragment>
  )
};
