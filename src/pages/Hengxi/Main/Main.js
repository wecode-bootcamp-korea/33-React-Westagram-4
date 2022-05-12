import React, { useCallback, useRef } from 'react';
import Nav from '../../../components/Nav/Nav.js';
import './Main.scss';
import {
  FaEllipsisH,
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
  FaBackspace,
  FaHeart,
} from 'react-icons/fa';
import { useState } from 'react';
import Aside from './Aside/Aside.js';
import cn from 'classnames';

function Main() {
  const [chats, setChats] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      like: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      like: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      like: false,
    },
  ]);

  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const chat = {
        id: nextId,
        text,
        like: false,
      };
      setChats(chats.concat(chat));
      nextId.current += 1;
      console.log(chats);
    },
    [chats]
  );

  const onClick = useCallback(() => {
    onInsert(value);
    setValue('');
    // e.prevendDefault();
  }, [onInsert, value]);

  const onRemove = useCallback(
    id => {
      setChats(chats.filter(chat => chat.id !== id));
    },
    [chats]
  );

  const onLike = useCallback(
    id => {
      setChats(
        chats.map(chat =>
          chat.id === id ? { ...chat, like: !chat.like } : chat
        )
      );
    },
    [chats]
  );
  // let [chatValue, setChatValue] = useState(['Good']);
  // let [chatInputValue, setChatInputValue] = useState('');
  // let [color, setColor] = useState(['black']);

  // const isValid = chatInputValue === '';

  // function post() {
  //   if (chatInputValue !== '') {
  //     let copyChatValue = [...chatValue];
  //     copyChatValue.push(chatInputValue);
  //     setChatValue(copyChatValue);
  //     setChatInputValue('');

  //     let copyColor = [...color];
  //     copyColor.push('black');
  //     setColor(copyColor);
  //   }
  // }

  // function postEnter(e) {
  //   if (e.code === 'Enter' && chatInputValue !== '') {
  //     post();
  //     setChatInputValue('');
  //   }
  // }

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
              {/* {chatValue.map((a, i) => {
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
              })} */}
              {chats.map(chat => (
                <ChatList
                  chat={chat}
                  key={chat.id}
                  onRemove={onRemove}
                  onLike={onLike}
                />
              ))}
            </div>

            <div className="articleInputBox">
              <input
                value={value}
                onChange={onChange}
                className="articleInput"
                placeholder="댓글달기..."
              />
              {/* <button onClick={post} disabled={isValid} className="articlePost">
                게시
              </button> */}
              <button onClick={onClick} type="submit" className="articlePost">
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

const ChatList = ({ chat, onRemove, onLike }) => {
  const { id, text, like } = chat;

  return (
    <div className="articlePush">
      <span className="articleNickname">hengxi </span>
      <span className="articleComment">{text}</span>
      <div className="likeIcon">
        <p className="articleTime">1분전</p>
        <div
          key={id}
          className={cn('likebox', { likes: like })}
          onClick={() => onLike(id)}
        >
          {like ? (
            <FaHeart className="likeIcons" />
          ) : (
            <FaRegHeart className="likeIcons" />
          )}
        </div>
        <FaBackspace
          onClick={() => onRemove(id)}
          className="likeIcons likeIconsDelete"
        />
      </div>
    </div>
  );
};

export default Main;
