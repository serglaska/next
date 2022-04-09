import {
  useState,
  useEffect,
  useContext
} from 'react';
import NewComment from './new-comment';
import CommentList from './comment-list';
import NotificationData from '../../store/notification-context';
import classes from './comments.module.css';
////////////////////////////////////////////

function Comments(props) {
  const { eventId } = props;
  const [comments, setComments] = useState([]);
  const notificationCtx = useContext(NotificationData)
  const [showComments, setShowComments] = useState(false);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true);
      fetch('/api/comments/' + eventId)
        .then(response => response.json())
        .then(data => {
          setComments(data.comments);
          setIsFetchingComments(false);
        })
    }
  },
    [showComments]
  );

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: 'Pending',
      status: 'pending',
      message: 'Please wait some times...',
    });
    fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error from server')
        }
      })
      .then(_ => {
        notificationCtx.showNotification({
          title: 'Success',
          status: 'success',
          message: 'Comment was added',
        });
      })
      .catch(error => {
        notificationCtx.showNotification({
          title: 'Error',
          status: 'error',
          message: 'Unpredictable error...' + error.message,
        });
      })
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList comments={comments} />}
      {showComments && isFetchingComments && <p>Comments is loading...</p>}
    </section>
  );
}

export default Comments;
