import { Button } from '../ui/index';
import DateIcon from '../icons/date-icon';
import style from './event-item.module.css';
import AddressIcon from '../icons/address-icon';
import ArrowRight from '../icons/arrow-right-icon';
////////////////////////////////////////////

export const EventItem = ({ item }) => {
  const userDate = new Date(item.date).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  });

  const formatedAddress = item.location.replace(', ', '\n');

  return <li className={style.item}>
    <img src={'/' + item.image} />
    <div className={style.content}>
      <div className={style.summary}>
        <h2>{item.title}</h2>
        <div children={style.date}>
          <span className={style.icon}>
            <DateIcon />
          </span>
          <time>
            {userDate}
          </time>
        </div>
        <div className={style.address}>
          <AddressIcon />
          <address>
            {formatedAddress}
          </address>
        </div>
      </div>
      <div className={style.actions}>
        <Button link={`/events/${item.id}`}>
          <span>
            Explore link
          </span>
          <span className={style.icon}>
            <ArrowRight />
          </span>
        </Button>
      </div>
    </div>
  </li>
};
