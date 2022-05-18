import React from 'react';

const SuggestUser = props => {
  return (
    <div>
      <div className="suggest_box">
        <div className="suggest_profile_img">
          <img src={props.src} alt="" />
          <div className="suggest_name">
            <div className="suggest_id">Pocket_master</div>
            <div className="suggest_nickname">{props.name}</div>
          </div>
        </div>
        <div className="suggest_follow">Follow</div>
      </div>
    </div>
  );
};

export default SuggestUser;
