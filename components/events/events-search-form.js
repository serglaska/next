
import { useRef } from 'react';
import { Button } from '../ui/index';
import style from './events-search.module.css';
/////////////////////////////////////////////////

export const EventsSearch = (props) => {
  const yearInput = useRef();
  const monthInput = useRef();

  const submitHandler = (event) => {
    const yearValue = yearInput.current.value;
    const monthValue = monthInput.current.value;
    event.preventDefault();
    props.onSearch({ yearValue, monthValue });
  }

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <div className={style.controls}>
        <div className={style.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearInput}>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={style.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInput}>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>
      </div>
      <Button>
        Search
      </Button>
    </form>
  )
};
