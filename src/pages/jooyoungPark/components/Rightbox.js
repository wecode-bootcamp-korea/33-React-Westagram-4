import React from 'react';
import { Link } from 'react-router-dom';

function Rightbox() {
  return (
    <div className="main_right_box">
      <div className="story_head">
        <p>회원님을 위한 추천</p>
        <Link to="/main-jy">모두 보기</Link>
      </div>
      <ul>
        <li className="user_profile_mini">
          <Link to="/main-jy">
            <img
              src="images/jooyoungPark/Main/mini_profile.jpg"
              alt="사용자 프로필 사진"
            />
          </Link>
          <div>
            <Link to="/main-jy">alexishyuni</Link>
            <p>회원님을 위한 추천</p>
          </div>
          <button className="follow">팔로우</button>
        </li>
        <li className="user_profile_mini">
          <Link to="/main-jy">
            <img
              src="images/jooyoungPark/Main/mini_profile.jpg"
              alt="사용자 프로필 사진"
            />
          </Link>
          <div>
            <Link to="/main-jy">__g90ng_dm</Link>
            <p>회원님을 위한 추천</p>
          </div>
          <button className="follow">팔로우</button>
        </li>
        <li className="user_profile_mini">
          <Link to="/main-jy">
            <img
              src="images/jooyoungPark/Main/mini_profile.jpg"
              alt="사용자 프로필 사진"
            />
          </Link>
          <div>
            <Link to="/main-jy">hsu_koreanart2021</Link>
            <p>회원님을 위한 추천</p>
          </div>

          <button className="follow">팔로우</button>
        </li>
        <li className="user_profile_mini">
          <Link to="/main-jy">
            <img
              src="images/jooyoungPark/Main/mini_profile.jpg"
              alt="사용자 프로필 사진"
            />
          </Link>
          <div>
            <Link to="/main-jy">kimmy_cafe</Link>
            <p>회원님을 위한 추천</p>
          </div>
          <button className="follow">팔로우</button>
        </li>
      </ul>
    </div>
  );
}

export default Rightbox;
