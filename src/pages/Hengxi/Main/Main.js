import React from 'react';
import Nav from '../../../components/Nav/Nav.js';
import './Main.scss';
import {
  FaEllipsisH,
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
} from 'react-icons/fa';
import { useState, useRef } from 'react';
import Aside from './Aside/Aside.js';
import ChatInput from './ChatInput.js';
import ChatList from './ChatList.js';

function Main() {
  const [chats, setChats] = useState([
    {
      id: 0,
      text: '리액트의 기초 알아보기',
      like: true,
    },
    {
      id: 1,
      text: 'westargram 만들기',
      like: true,
    },
    {
      id: 2,
      text: '기능 구현 해보자...',
      like: false,
    },
  ]);

  const pushId = useRef(3);

  const onInput = text => {
    const chat = {
      id: pushId.current,
      text,
      like: false,
    };
    setChats(chats.concat(chat));
    pushId.current += 1;
    console.log(chats);
  };

  const onRemove = id => {
    let chatRemove = chats.filter(chat => chat.id !== id);
    setChats(chatRemove);
  };

  const onLike = id => {
    setChats(
      chats.map(chat => (chat.id === id ? { ...chat, like: !chat.like } : chat))
    );
  };

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
            <ChatList chats={chats} onRemove={onRemove} onLike={onLike} />
            <ChatInput onInput={onInput} />
          </article>
        </section>
        <Aside />
      </main>
    </>
  );
}
export default Main;
