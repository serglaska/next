import { useRef, useContext } from 'react';
import NotificationData from '../../store/notification-context';
import classes from './newsletter-registration.module.css';
///////////////////////////////////////////////////////////

function NewsletterRegistration() {
  const notificationCtx = useContext(NotificationData);
  const emailRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    notificationCtx.showNotification({
      title: 'Pending',
      status: 'pending',
      message: 'Please wait some times...',
    });
    fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: enteredEmail
      })
    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Error from server')
      }
    })
      .then(_ => {
        notificationCtx.showNotification({
          title: 'Success',
          status: 'success',
          message: 'Everything is ok',
        });
      })
      .catch(error => {
        notificationCtx.showNotification({
          title: 'Error',
          status: 'error',
          message: 'Unpredictable error...' + error.message,
        });
      });
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
