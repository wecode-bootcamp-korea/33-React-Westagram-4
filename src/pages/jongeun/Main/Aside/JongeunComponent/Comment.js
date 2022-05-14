import React from 'react';

const Comment = props => {
  return (
    <div className="comment_board">
      <div className="comment">{props.comment}</div>
      <div className="comment_icon">
        <i className="fa-regular fa-heart ft_log comment_heart"></i>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
};

export default Comment;
