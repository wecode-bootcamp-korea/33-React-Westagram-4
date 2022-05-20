import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import Nav from '../../../components/Nav/Nav.js';
import Rightbox from '../components/Rightbox.js';
import Feedbox from '../components/Feedbox';

function Main() {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    fetch('data/Feed.json')
      .then(red => red.json())
      .then(data => {
        setFeed(data);
      });
  }, []);
  return (
    <div className="main">
      <Nav />

      <main>
        <div className="feed">
          {feed.map(({ id, userId, desc, profileImg, feedImg }) => (
            <Feedbox
              key={id}
              userId={userId}
              desc={desc}
              profileImg={profileImg}
              feedImg={feedImg}
            />
          ))}
        </div>

        <div className="main_right">
          <div className="user_info user_info_right">
            <div className="user_info_main">
              <Link to="/main-jy">
                <img
                  src="images/jooyoungPark/Main/mini_profile.jpg"
                  alt="/main-jy"
                />
              </Link>
            </div>
            <div className="user_name">
              <Link to="/main-jy">wecode_bootcamp</Link>
              <Link to="/main-jy">WeCode - 위코드</Link>
            </div>
          </div>

          <div className="main_right_box">
            <div className="story_head">
              <p>스토리</p>
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
                  <p>2시간 전</p>
                </div>
              </li>
              <li className="user_profile_mini">
                <Link to="/main-jy">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </Link>
                <div>
                  <Link to="/main-jy">alexishyuni</Link>
                  <p>2시간 전</p>
                </div>
              </li>
              <li className="user_profile_mini">
                <Link to="/main-jy">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </Link>
                <div>
                  <Link to="/main-jy">alexishyuni</Link>
                  <p>2시간 전</p>
                </div>
              </li>
              <li className="user_profile_mini">
                <Link to="/main-jy">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </Link>
                <div>
                  <Link to="/main-jy">alexishyuni</Link>
                  <p>2시간 전</p>
                </div>
              </li>
            </ul>
          </div>

          <Rightbox />
        </div>
      </main>
    </div>
  );
}
export default Main;
