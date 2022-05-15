import React from 'react';
import Comment from './Comment.js';

function Commentbox({ comment }) {
  return (
    <ul className="coment_new">
      {comment.map(com => (
        <Comment key={com.id} comment={com} />
      ))}
    </ul>
  );
}

export default Commentbox;
