import React from 'react';
import Comment from './Comment.js';

function Commentbox({ comment, onRemove }) {
  return (
    <ul className="coment_new">
      {comment.map(com => (
        <Comment key={com.id} comment={com} onRemove={onRemove} />
      ))}
    </ul>
  );
}

export default Commentbox;
