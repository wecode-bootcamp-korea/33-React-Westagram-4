import React, { useState } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import SuggestUser from './Aside/JongeunComponent/SuggestUser';
import Comment from './Aside/JongeunComponent/Comment';

function Main() {
  let [comment, setComment] = useState([
    { content: '댓글달리는 곳', id: randomId(), like: false },
  ]);
  let [input, setInput] = useState('');

  function randomId() {
    let a = new Uint32Array(3);
    window.crypto.getRandomValues(a);
    return (
      performance.now().toString(36) +
      Array.from(a)
        .map(A => A.toString(36))
        .join('')
    ).replace(/\./g, '');
  }

  function postEnter(e) {
    if (e.code === 'Enter' && input.length > 0) {
      postClick();
    }
  }

  function postClick() {
    if (input.length > 0) {
      let task = {
        id: randomId(),
        content: input,
        like: false,
      };
      let clickCopy = [...comment];
      clickCopy.unshift(task);
      setComment(clickCopy);
    }
    setInput('');
  }

  return (
    <div>
      {/* navbar */}
      <Nav />
      <main className="main_section">
        <div className="main_container">
          <section className="feeds">
            <article>
              <div className="feeds_navbar">
                <div className="feeds_nav_right">
                  <img
                    className="feeds_profile_img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JfECC4oc1cHR9hzF4PCCsigqs4M0uJ_fRg&usqp=CAU"
                    alt="피카츄"
                  />
                  <div className="feed_nav_title">포켓몬스터</div>
                </div>
                <div className="feeds_nav_left">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <div className="feed_img">
                <img
                  src="http://mobiletv.skbroadband.com/images/content_img/M432/99/10/M4329910LFOA242877_200.jpg"
                  alt=""
                />
              </div>
              <div className="feeds_footer">
                <div className="footer_logo">
                  <div className="footer_logo_left">
                    <i className="fa-regular fa-heart ft_log"></i>
                    <i className="fa-regular fa-comment ft_log"></i>
                    <i className="fa-regular fa-paper-plane ft_log"></i>
                  </div>
                  <div className="footer_logo_right">
                    <i className="fa-regular fa-bookmark ft_log"></i>
                  </div>
                </div>
                <div className="footer_like">좋아요 1004개</div>
                <div className="footer_description">
                  Pocket Monster 🔥 동심을 찾아 떠나는 여행 🔥... 더 보기 댓글
                  <br />
                  14개 모두 보기
                </div>
                <div className="comment_up">
                  {/* <div className="comment_board">
                    <div className="comment">댓글달리는 곳입니다</div>
                    <div className="comment_icon">
                      <i className="fa-regular fa-heart ft_log comment_heart"></i>
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
                  </div> */}

                  {/* {comment.map((a, i) => {
                    return (
                      <div className="comment_board" key={a}>
                        <div className="comment">{comment[i]}</div>
                        <div className="comment_icon">
                          <i
                            style={{ color: likeBtn[i] }}
                            onClick={() => {
                              let copy = [...likeBtn];
                              if (copy[i] === 'black') {
                                copy[i] = 'red';
                                setLikeBtn(copy);
                              } else if (copy[i] === 'red') {
                                copy[i] = 'black';
                                setLikeBtn(copy);
                              }
                            }}
                            className="fa-solid fa-heart comment_heart"
                          ></i>
                          <i
                            onClick={i => {
                              let copy = [...comment];
                              copy.splice(i, 1);
                              setComment(copy);
                            }}
                            className="fa-solid fa-trash-can"
                          ></i>
                        </div>
                      </div>
                    );
                  })} */}
                  {comment.map((a, i) => {
                    return (
                      <Comment
                        key={i}
                        a={a}
                        comment={comment}
                        i={i}
                        setComment={setComment}
                      />
                    );
                  })}
                </div>
                <div className="footer_time">5월 2일</div>
              </div>
              <div className="feed_comment">
                <input
                  value={input}
                  onChange={e => {
                    setInput(e.target.value);
                  }}
                  onKeyUp={postEnter}
                  className="comment_area"
                  type="text"
                  placeholder="댓글 달기.."
                />
                <button className="input_btn" onClick={postClick}>
                  게시
                </button>
              </div>
            </article>
          </section>
          {/* <!-- main right --> */}
          <div className="main_right">
            <div className="right_profile">
              <div className="right_profile_picture">
                <img
                  src="https://post-phinf.pstatic.net/MjAyMDAzMDJfMjMz/MDAxNTgzMDk2NDgwNDI3.cIs4o9p5ZTNFYm-kDI8LTdzOaTFeiX9K8ERmDe1fa7Eg.MQaiZX6Lg1R79EDIFYFUX3m5hQN89HxQO5x58woiUcIg.JPEG/%EC%9E%A0%EB%A7%8C%EB%B3%B42.jpg?type=w1200"
                  alt="잠만보"
                />
                <div className="right_profile_name">
                  <div className="profile_id">Pocket_master</div>
                  <div className="profile_nickname">Pocket</div>
                </div>
              </div>
              <div className="switch_btn">Switch</div>
            </div>
            <div className="suggest_for_you">
              <div>Suggestions For You</div>
              <div className="see-all">See All</div>
            </div>
            <div className="suggest_user">
              <SuggestUser
                name="Digdag"
                src="https://img.animalplanet.co.kr/news/2020/06/13/700/30jarcn5b5o82bpbxn24.jpg"
              />
              <SuggestUser
                name="Squirtle"
                src="https://i.pinimg.com/280x280_RS/13/d3/2b/13d32b4e61c1f4b8db589e46b3e1b857.jpg"
              />
              <SuggestUser
                name="Charmander"
                src="https://t1.daumcdn.net/cfile/tistory/99BB433359E8C2BF32"
              />
              <SuggestUser
                name="Bulbasaur"
                src="https://pbs.twimg.com/tweet_video_thumb/DscSCn5V4AExZzB.jpg"
              />
              <SuggestUser
                name="Pikachu"
                src="https://bleedingcool.com/wp-content/uploads/2021/06/Pikachu-color-model-publicity-cel-1200x628.jpg"
              />
            </div>

            <div className="right_foot">
              <div className="right_foot_about">
                About Help Press API Jobs Privacy Terms <br />
                Locations Top Accounts Hashtags Language
              </div>
              <div className="right_foot_last">© 2022 INSTAGRAM FROM META</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
