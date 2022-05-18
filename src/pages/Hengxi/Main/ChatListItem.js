import './ChatListItem.scss';
import { FaRegHeart, FaBackspace, FaHeart } from 'react-icons/fa';
import cn from 'classnames';

const ChatListItem = ({ chat, onRemove, onLike }) => {
  const { id, text, like } = chat;

  return (
    <div className="articlePush">
      <div>
        <span className="liksNickname">hengxi </span>
        <span className="chatPost">{text}</span>
        <div className="likeIcon">
          <p className="articleTime">1분전</p>
          <FaBackspace
            className="likeIconsDelete"
            onClick={() => onRemove(id)}
          />
        </div>
      </div>
      <div
        className={cn('likeIconsHeart', { likes: like })}
        onClick={() => onLike(id)}
      >
        {like ? <FaHeart /> : <FaRegHeart />}
      </div>
    </div>
  );
};

export default ChatListItem;
