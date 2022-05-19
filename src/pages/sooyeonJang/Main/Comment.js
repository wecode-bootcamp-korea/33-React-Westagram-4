import React from 'react';
import './Main.scss';

const Comment = props => {
  return (
    <li className="comments">
      <span className="comment-user">user{props.i + 1}</span>
      {props.replies}
    </li>
  );
};

export default Comment;
