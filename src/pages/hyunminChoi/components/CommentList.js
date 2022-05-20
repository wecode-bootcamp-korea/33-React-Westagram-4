import { FaHeart, FaTrash } from 'react-icons/fa';
import { useState } from 'react';

const CommentList = props => {
  let [heartClick, setHeartClick] = useState(false);

  return (
    <div className="userCommentBox">
      <p className="userName">{props.userName}</p>
      <div className="userComment">{props.userComment}</div>
      <p
        className={heartClick === false ? 'userHeart' : 'userHeartClicked'}
        onClick={() => {
          setHeartClick(!heartClick);
        }}
      >
        <FaHeart />
      </p>
      <p
        className="delete"
        onClick={() => {
          let copyFeedComments = [...props.feedComments];
          copyFeedComments.splice(props.id, 1);
          props.setFeedComments(copyFeedComments);
        }}
      >
        <FaTrash />
      </p>
    </div>
  );
};

export default CommentList;
