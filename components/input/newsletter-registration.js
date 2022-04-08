import { useRef } from 'react';
import classes from './newsletter-registration.module.css';
///////////////////////////////////////////////////////////

function NewsletterRegistration() {
  const emailRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: enteredEmail
      })
    }).then(res => res.json())
      .then(data => console.log(data, 'promise works'));
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            id='email'
            type='email'
            ref={emailRef}
            aria-label='Your email'
            placeholder='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
