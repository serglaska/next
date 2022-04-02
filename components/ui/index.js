import Link from 'next/link';
import style from './button.module.css';
////////////////////////////////////////////////////////
export const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={style.btn}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      <button onClick={props.onClick}>
        {props.children}
      </button>
    )
  }
};
