import { EventItem } from "./event-item";
import style from './event-list.module.css';
//////////////////////////////////////////////////

export const EventList = ({ events }) => {
  return <ul className={style.list}>
    {events.map(element => <EventItem item={element} key={Math.random()} />)}
  </ul>
};
