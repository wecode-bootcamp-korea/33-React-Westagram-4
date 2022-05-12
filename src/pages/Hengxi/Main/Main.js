import React from 'react';
import Nav from '../../../components/Nav/Nav.js';
import './Main.scss';
import {
  FaEllipsisH,
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
  FaBackspace,
} from 'react-icons/fa';
import { useState } from 'react';
import Aside from './Aside/Aside.js';

function Main() {
  let [chatValue, setChatValue] = useState(['Good']);
  let [chatInputValue, setChatInputValue] = useState('');
  let [color, setColor] = useState(['black']);

  const isValid = chatInputValue === '';

  function post() {
    if (chatInputValue !== '') {
      let copyChatValue = [...chatValue];
      copyChatValue.push(chatInputValue);
      setChatValue(copyChatValue);
      setChatInputValue('');

      let copyColor = [...color];
      copyColor.push('black');
      setColor(copyColor);
    }
  }

  function postEnter(e) {
    if (e.code === 'Enter' && chatInputValue !== '') {
      post();
      setChatInputValue('');
    }
  }

  return (
    <>
      <Nav />
      <main>
        <section>
          <article>
            <div className="articleHeader">
              <img
                alt="profile"
                className="articleProfileImg"
                src="/images/Hengxi/Main/profile.jpg"
              />
              <div className="articleProfileTitle">
                <span className="articleNickname">wecode_bootcamp</span>
                <p className="articlePlace">woCode - 위코드</p>
              </div>
              <FaEllipsisH className="articleHeaderIcon" />
            </div>
            <img
              alt="articleImg"
              className="articleImg"
              src="/images/Hengxi/Main/mainImg2.avif"
            />
            <div className="articleIconBox">
              <div>
                <FaRegHeart className="articleIcons" />
                <FaRegComment className="articleIcons" />
                <FaRegPaperPlane className="articleIcons" />
              </div>
              <div>
                <FaRegBookmark className="articleIcons" />
              </div>
            </div>
            <div className="articleContent">
              <p className="likebasic">
                <span className="liksNickname">hengxi</span>님 외 <span>4</span>
                명이 좋아합니다.
              </p>
              {chatValue.map((a, i) => {
                return (
                  <div key={i} className="articlePush">
                    <span className="articleNickname">hengxi </span>
                    <span className="articleComment">{a}</span>
                    <div className="likeIcon">
                      <p className="articleTime">1분전</p>

                      <FaRegHeart
                        color={color[i]}
                        onClick={() => {
                          let colorCopy = [...color];
                          colorCopy[i] = color[i] === 'black' ? 'red' : 'black';
                          setColor(colorCopy);
                        }}
                        className="likeIcons likeIconsHeart"
                      />

                      <FaBackspace
                        onClick={() => {
                          let copyChatValue = [...chatValue];
                          copyChatValue.splice(i, 1);
                          let colorCopy = [...color];
                          colorCopy.splice(i, 1);
                          setColor(colorCopy);
                          setChatValue(copyChatValue);
                        }}
                        className="likeIcons likeIconsDelete"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="articleInputBox">
              <input
                value={chatInputValue}
                onKeyPress={postEnter}
                onChange={e => {
                  setChatInputValue(e.target.value);
                }}
                className="articleInput"
                type="text"
                placeholder="댓글달기..."
              />
              <button onClick={post} disabled={isValid} className="articlePost">
                게시
              </button>
            </div>
          </article>
        </section>
        <Aside />
      </main>
    </>
  );
}
export default Main;
