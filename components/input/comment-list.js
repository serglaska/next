import classes from './comment-list.module.css';

function CommentList({ comments }) {
  return (
    <ul className={classes.comments}>
      {comments.map(el => <li key={el._id}>
        <p>{el.text}</p>
        <div>
          By <address>{el.name}</address>
        </div>
      </li>)}
    </ul>
  );
}

export default CommentList;
