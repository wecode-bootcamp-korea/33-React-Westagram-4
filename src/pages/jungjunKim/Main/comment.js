import React from 'react';

function Comment(props) {
  // let [댓글모음배열, 댓글모음배열바꾸기] = useState(['Good']);
  return (
    <div className="articleCommentBox" key={props.i}>
      <span className="articleNickname">unknownUser{props.i + 1}</span>
      <span className="articleComment">{props.댓글모음배열1}</span>
      <div className="likeIcon">
        <p className="articleTime">{props.i}분전</p>
        {/* <!-- <i className="fa-regular fa-heart likeIconsHeart likeIcons"></i>
                 <i className="fa-solid fa-delete-left likeIconsDelete likeIcons"></i> --> */}
      </div>
    </div>
  );
}

export default Comment;
