import React from 'react';
import {
  FaComment,
  FaEllipsisV,
  FaHeart,
  FaPaperPlane,
  FaStickyNote,
} from 'react-icons/fa';
import Nav from '../../../../src/components/Nav/Nav.js';
import './Main.scss';

function Main() {
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
                      <div className="userCommentBox">
                        <p className="userName">hacker</p>
                        <div className="userComment">사진이 참 잘나왔네요!</div>
                        <p className="userHeart">
                          <FaHeart />
                        </p>
                      </div>
                    </div>
                    <section className="dateAgo">3일전</section>
                    <section className="addCommentBox">
                      <input
                        type="text"
                        className="inputComment"
                        placeholder="댓글 달기..."
                      />
                      <button type="button" className="submitCommentBtn">
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
