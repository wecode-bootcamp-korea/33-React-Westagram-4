import React from 'react';

function MainRightStory(props) {
  return (
    <div className="mainRight_story_content">
      <div>
        <img src={props.img} className="profileImg" alt="profileImg" />
      </div>
      <div>
        <p>{props.userName}</p>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default MainRightStory;
