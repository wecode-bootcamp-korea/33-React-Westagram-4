import React, { useState, useEffect } from 'react';
import {
  FaComment,
  FaEllipsisV,
  FaHeart,
  FaPaperPlane,
  FaStickyNote,
} from 'react-icons/fa';
import CommentList from './CommentList.js';

function Feed({ profileName, userPhoto, feedPhoto }) {
  let [userName] = useState('hacker');
  let [comment, setComment] = useState('');
  let [feedComments, setFeedComments] = useState([]);
  let [isValid, setIsValid] = useState(false);

  let post = e => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment('');
  };

  useEffect(() => {
    fetch('data/commentData.json', {})
      .then(res => res.json())
      .then(data => {
        setFeedComments(data);
      });
  }, []);

  return (
    <div className="feeds">
      <article>
        <div className="content">
          <div className="top">
            <div className="topProfile">
              <img src={userPhoto} alt="profile" className="profileImg" />
              <div>{profileName}</div>
            </div>
            <div className="topService">
              <FaEllipsisV />
            </div>
          </div>

          <div className="mid">
            <img src={feedPhoto} alt="커플 사진" />
          </div>

          <div className="bottom">
            <section className="convenience">
              <span>
                <FaHeart />
              </span>
              <span>
                <FaComment />
              </span>
              <span>
                <FaPaperPlane />
              </span>
              <span>
                <FaStickyNote />
              </span>
            </section>
            <section className="like">
              <p>좋아요 1,092,182개</p>
            </section>
            <div className="commentBox">
              {feedComments.map(commentArr => {
                return (
                  <CommentList
                    userName={userName}
                    userComment={commentArr}
                    feedComments={feedComments}
                    setFeedComments={setFeedComments}
                  />
                );
              })}
            </div>
            <section className="dateAgo">3일전</section>
            <section className="addCommentBox">
              <input
                type="text"
                className="inputComment"
                placeholder="댓글 달기..."
                onChange={e => {
                  setComment(e.target.value);
                }}
                onKeyUp={e => {
                  e.target.value.length > 0
                    ? setIsValid(true)
                    : setIsValid(false);
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' && isValid) {
                    post();
                  }
                }}
                value={comment}
              />
              <button
                type="button"
                className={
                  comment.length > 0
                    ? 'submitCommentActive'
                    : 'submitCommentInactive'
                }
                onClick={post}
                disabled={isValid ? false : true}
              >
                게시
              </button>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Feed;
