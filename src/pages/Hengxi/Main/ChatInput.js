import { useState } from 'react';
import './ChatInput.scss';

const ChatInput = ({ onInput }) => {
  const [value, setValue] = useState('');

  const isValid = value.length === 0;

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInput(value);
    setValue('');
  };

  return (
    <form className="articleInputBox" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        className="articleInput"
        placeholder="댓글달기..."
      />
      <button disabled={isValid} type="submit" className="articlePost">
        게시
      </button>
    </form>
  );
};

export default ChatInput;
