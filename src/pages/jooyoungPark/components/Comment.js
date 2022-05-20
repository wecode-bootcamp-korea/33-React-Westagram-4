import React from 'react';

function Comment({ comment, onRemove }) {
  return (
    <li className="coment_new_box">
      <strong>p__jooyoung</strong>
      <p>{comment.text}</p>
      <button>
        <img
          className="heart"
          src="images/jooyoungPark/Main/heart.png"
          alt="좋아요"
        />
      </button>
      <span onClick={() => onRemove(comment.id)}>삭제</span>
    </li>
  );
}

export default Comment;
