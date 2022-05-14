import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const CommentList = props => {
  return (
    <div className="userCommentBox">
      <p className="userName">{props.userName}</p>
      <div className="userComment">{props.userComment}</div>
      <p className="userHeart">
        <FaHeart />
      </p>
    </div>
  );
};

export default CommentList;
