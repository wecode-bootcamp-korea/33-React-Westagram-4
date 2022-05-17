import React, { useState, useRef } from 'react';
import Nav from '../../../components/Nav/Nav.js';
import './Main.scss';
import '../../../styles/variables.scss';
import Commentbox from '../components/Commentbox.js';
import { Link } from 'react-router-dom';
import Rightbox from '../components/Rightbox.js';

function Main() {
  const [value, setValue] = useState('');
  let [comment, setComment] = useState([]);

  const onChange = e => {
    setValue(e.target.value);
  };

  // useRef()로 관리하는 변수는 값이 바뀌어도 리렌더링 되지 않는다.
  const nextId = useRef(0);
  const onSubmit = e => {
    setComment([
      ...comment,
      {
        id: nextId.current,
        text: value,
      },
    ]);

    // input 초기화
    setValue('');

    // id값 1씩 증가
    nextId.current += 1;

    // 새로고침 X
    e.preventDefault();
  };

  const onRemove = id => {
    setComment(comment.filter(com => com.id !== id));
  };

  return (
    <div className="main">
      <Nav />

      <main>
        <div className="feed">
          <article className="post">
            <div className="user_post_wrap">
              <div className="user_info">
                <div className="user_img">
                  <Link to="/main-jy">
                    <img
                      src="images/jooyoungPark/Main/mini_profile.jpg"
                      alt="/main-jy"
                    />
                  </Link>
                </div>
                <div className="user_name">
                  <Link to="/main-jy">cuteCat</Link>
                  <Link to="/main-jy">귀여움이 세상을 지배한다.</Link>
                </div>
                <button className="more_btn">더보기</button>
              </div>

              <div className="user_post_img">
                <img src="images/jooyoungPark/Main/cat.jpg" alt="" />
              </div>

              <div className="user_post_desc">
                <div className="user_check_wrap">
                  <div>
                    <button>
                      <img src="images/jooyoungPark/Main/heart.png" alt="" />
                    </button>
                    <button>
                      <img src="images/jooyoungPark/Main/chat.png" alt="" />
                    </button>
                    <button>
                      <img src="images/jooyoungPark/Main/send.png" alt="" />
                    </button>
                  </div>
                  <button>북마크</button>
                </div>
                <div className="like_count">
                  <Link to="/main-jy">
                    <img
                      src="images/jooyoungPark/Main/mini_profile.jpg"
                      alt="/main-jy"
                    />
                  </Link>
                  <span className="like_desc">
                    lemon님 외 4명이 좋아합니다.
                  </span>
                </div>
                <div className="user_post_content">
                  <strong className="user_id">cuteCat</strong>
                  <span>고양이 귀여워</span>
                  <Commentbox comment={comment} onRemove={onRemove} />
                  <button className="more_comment">댓글 147개 모두 보기</button>
                </div>
              </div>

              <form className="comment_wrap" onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  required
                  value={value}
                  onChange={onChange}
                />
                <button className="comment_enter">게시</button>
              </form>
            </div>
          </article>
        </div>

        <div className="main_right">
          <div className="user_info user_info_right">
            <div className="user_info_main">
              <Link to="/main-jy">
                <img
                  src="images/jooyoungPark/Main/mini_profile.jpg"
                  alt="/main-jy"
                />
              </Link>
            </div>
            <div className="user_name">
              <Link to="/main-jy">wecode_bootcamp</Link>
              <Link to="/main-jy">WeCode - 위코드</Link>
            </div>
          </div>

          <div className="main_right_box">
            <div className="story_head">
              <p>스토리</p>
              <Link to="/main-jy">모두 보기</Link>
            </div>
            <ul>
              <li className="user_progile_mini">
                <Link to="/main-jy">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </Link>
                <div>
                  <Link to="/main-jy">alexishyuni</Link>
                  <p>2시간 전</p>
                </div>
              </li>
              <li className="user_progile_mini">
                <Link to="/main-jy">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </Link>
                <div>
                  <Link to="/main-jy">alexishyuni</Link>
                  <p>2시간 전</p>
                </div>
              </li>
              <li className="user_progile_mini">
                <Link to="/main-jy">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </Link>
                <div>
                  <Link to="/main-jy">alexishyuni</Link>
                  <p>2시간 전</p>
                </div>
              </li>
              <li className="user_progile_mini">
                <Link to="/main-jy">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </Link>
                <div>
                  <Link to="/main-jy">alexishyuni</Link>
                  <p>2시간 전</p>
                </div>
              </li>
            </ul>
          </div>

          <Rightbox />
        </div>
      </main>
    </div>
  );
}
export default Main;
