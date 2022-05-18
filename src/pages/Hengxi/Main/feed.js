import React, { useState, useRef, useEffect } from 'react';
import './feed.scss';
import {
  FaEllipsisH,
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
} from 'react-icons/fa';
import ChatInput from './ChatInput.js';
import ChatList from './ChatList.js';

const Feeds = ({ feeds }) => {
  const { id, profile, profileId, profilePlace, mainImg } = feeds;
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setChats(data);
      });
  }, []);

  const pushId = useRef(3);

  const onInput = text => {
    const chat = {
      id: pushId.current,
      text,
      like: false,
    };
    setChats(chats.concat(chat));
    pushId.current += 1;
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
    <article>
      <div className="articleHeader">
        <img alt="profile" className="articleProfileImg" src={profile} />
        <div className="articleProfileTitle">
          <span className="articleNickname">{profileId}</span>
          <p className="articlePlace">{profilePlace}</p>
        </div>
        <FaEllipsisH className="articleHeaderIcon" />
      </div>
      <img alt="articleImg" className="articleImg" src={mainImg} />
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
  );
};

export default Feeds;
