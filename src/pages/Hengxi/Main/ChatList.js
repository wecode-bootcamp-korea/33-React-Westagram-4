import './ChatList.scss';
import ChatListItem from './ChatListItem';

const ChatList = ({ chats, onRemove, onLike }) => {
  return (
    <div className="articleContent">
      <p className="likebasic">
        <span className="liksNickname">hengxi</span>님 외 <span>4</span>
        명이 좋아합니다.
      </p>
      {chats.map(chat => (
        <ChatListItem
          chat={chat}
          key={chat.id}
          onRemove={onRemove}
          onLike={onLike}
        />
      ))}
    </div>
  );
};

export default ChatList;
