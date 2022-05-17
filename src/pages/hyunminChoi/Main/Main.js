import React, { useState } from 'react';
import {
  FaComment,
  FaEllipsisV,
  FaHeart,
  FaPaperPlane,
  FaStickyNote,
} from 'react-icons/fa';
import Nav from '../../../../src/components/Nav/Nav.js';
import CommentList from './CommentList.js';
import './Main.scss';

function Main() {
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
  return (
    <div>
      <Nav />
      <section>
        <div className="wrapper">
          <div className="main">
            {/* 피드영역 */}
            <div className="feeds">
              <article>
                <div className="content">
                  <div className="top">
                    <div className="topProfile">
                      <img
                        src="../../../../images/hyunminChoi/Main/developer.avif"
                        alt="profile"
                        className="profileImg"
                      />
                      <div>influencer</div>
                    </div>
                    <div className="topService">
                      <FaEllipsisV />
                    </div>
                  </div>

                  <div className="mid">
                    <img
                      src="../../../../images/hyunminChoi/Main/couple.avif"
                      alt="커플 사진"
                    />
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
                      {feedComments.map((commentArr, i) => {
                        return (
                          <CommentList
                            key={i}
                            id={i}
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
                          if (e.key == 'Enter' && isValid) {
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
            {/* 우측메뉴 */}
            <div className="mainRight">
              <div className="mainRight_account">
                <div>
                  <img
                    src="../../../../images/hyunminChoi/Main/developer.avif"
                    alt="myProfile"
                  />
                </div>
                <div>
                  <p>Hacker</p>
                  <p>wecode</p>
                </div>
              </div>
              <div className="mainRight_story">
                <div className="mainRight_story_title">
                  <div>
                    <span>스토리</span>
                  </div>
                  <div>
                    <span>모두보기</span>
                  </div>
                </div>
                <div className="mainRight_story_content">
                  <div>
                    <img
                      src="../../../../images/hyunminChoi/Main/man1.avif"
                      className="profileImg"
                      alt="profileImg"
                    />
                  </div>
                  <div>
                    <p>superman</p>
                    <p>test</p>
                  </div>
                </div>
                <div className="mainRight_story_content">
                  <div>
                    <img
                      src="../../../../images/hyunminChoi/Main/man2.avif"
                      className="profileImg"
                      alt="profileImg"
                    />
                  </div>
                  <div>
                    <p>Ironman</p>
                    <p>test</p>
                  </div>
                </div>
                <div className="mainRight_story_content">
                  <div>
                    <img
                      src="../../../../images/hyunminChoi/Main/man1.avif"
                      className="profileImg"
                      alt="profileImg"
                    />
                  </div>
                  <div>
                    <p>batman</p>
                    <p>test</p>
                  </div>
                </div>
              </div>
              <div className="mainRight_recommend">
                <div className="custom_recommend_title">
                  <div>
                    <span>회원님을 위한 추천</span>
                  </div>
                  <div>모두 보기</div>
                </div>
                <div className="custom_recommend_content">
                  <div>
                    <img
                      src="../../../../images/hyunminChoi/Main/woman1.avif"
                      alt="woman"
                      className="profileImg"
                    />
                  </div>
                  <div>
                    <div>
                      <span>woman1</span>
                    </div>
                    <div>
                      <span>_legend님 외 ...</span>
                    </div>
                  </div>
                  <div>
                    <span>팔로우</span>
                  </div>
                </div>
                <div className="custom_recommend_content">
                  <div>
                    <img
                      src="../../../../images/hyunminChoi/Main/woman1.avif"
                      alt="woman"
                      className="profileImg"
                    />
                  </div>
                  <div>
                    <div>
                      <span>woman1</span>
                    </div>
                    <div>
                      <span>_legend님 외 ...</span>
                    </div>
                  </div>
                  <div>
                    <span>팔로우</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Main;
