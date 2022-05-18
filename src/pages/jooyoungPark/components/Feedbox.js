import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Commentbox from '../components/Commentbox.js';

const Feedbox = ({ userId, desc, profileImg, feedImg }) => {
  useEffect(() => {
    fetch('data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setComment(data);
      });
  }, []);

  const [value, setValue] = useState('');
  let [comment, setComment] = useState([]);

  const onChange = e => {
    setValue(e.target.value);
  };

  const nextId = useRef(4);
  const onSubmit = e => {
    // 새로고침 X
    // 제일 먼저 시작하는 것이 좋다고 멘토님께서 알려주셨어요! => 왜일까?!
    e.preventDefault();
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
  };

  const onRemove = id => {
    setComment(comment.filter(com => com.id !== id));
  };

  return (
    <article className="post">
      <div className="user_post_wrap">
        <div className="user_info">
          <div className="user_img">
            <Link to="/main-jy">
              <img src={profileImg} alt="/main-jy" />
            </Link>
          </div>
          <div className="user_name">
            <Link to="/main-jy">{userId}</Link>
            <Link to="/main-jy">{desc}</Link>
          </div>
        </div>

        <div className="user_post_img">
          <img src={feedImg} alt="" />
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
            <span className="like_desc">lemon님 외 4명이 좋아합니다.</span>
          </div>
          <div className="user_post_content">
            <strong className="user_id">{userId}</strong>
            <span>{desc}</span>
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
  );
};

export default Feedbox;
