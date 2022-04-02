import Link from 'next/link';
import style from './main-header.module.css';
/////////////////////////////////////////

export const MainHeader = () => (
  <header className={style.header}>
    <div className={style.logo}>
      <Link href='/'>NextEvents</Link>
    </div>
    <nav className={style.navigation}>
      <ul>
        <li>
          <Link href='/events'>
            All Events
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
