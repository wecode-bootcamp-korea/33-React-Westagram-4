import React from 'react';
import { useState } from 'react';

const Comment = ({ comment, a, i, setComment }) => {
  function handleDelete() {
    let copy = [...comment];
    copy.splice(i, 1);
    setComment(copy);
  }

  function handleHeart(id) {
    let copy = [...comment];
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].id === id) {
        if (copy[i].isLiked === true) {
          copy[i].isLiked = false;
          setComment(copy);
        } else if (comment[i].isLiked === false) {
          copy[i].isLiked = true;
          setComment(copy);
        }
      }
    }
  }

  // react re-rendering
  // re-render
  // UI -> state
  // state,props change re-render
  // state immutable
  // object, array direct X
  // setState, state change, make new state -> replace

  return (
    <div className="comment_board">
      <div className="comment_left">
        <div className="comment_uerName">{a.userName}</div>
        <div className="comment_content">{a.content}</div>
      </div>
      <div className="comment_icon">
        <i
          onClick={id => {
            handleHeart(comment[i].id);
          }}
          style={{ color: comment[i].isLiked ? 'red' : 'black' }}
          className="fa-solid fa-heart comment_heart"
        ></i>
        <i onClick={() => handleDelete()} className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
};

export default Comment;
