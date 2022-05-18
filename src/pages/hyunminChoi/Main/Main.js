import React, { useState, useEffect } from 'react';
import Nav from '../../../../src/components/Nav/Nav.js';
import MainRightStory from '../components/MainRightStory.js';
import Feed from '../components/Feed.js';
import './Main.scss';

function Main() {
  let user = [
    {
      id: 1,
      userName: 'ironman',
      img: '../../../../images/hyunminChoi/Main/man1.avif',
    },
    {
      id: 2,
      userName: 'aquaman',
      img: '../../../../images/hyunminChoi/Main/man2.avif',
    },
    {
      id: 3,
      userName: 'batman',
      img: '../../../../images/hyunminChoi/Main/man3.avif',
    },
  ];

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('data/feedData.json', {})
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);

  return (
    <div>
      <Nav />
      <section>
        <div className="wrapper">
          <div className="main">
            {/* 피드영역 */}
            {feed.map(feedList => (
              <Feed
                key={feedList.id}
                profileName={feedList.userName}
                userPhoto={feedList.userPhoto}
                feedPhoto={feedList.feedPhoto}
              />
            ))}

            {/* 우측메뉴 */}
            <div className="mainRight">
              <div className="mainRight_account">
                <div>
                  <img
                    src="../../../../images/hyunminChoi/Main/developer.avif"
                    alt="myProfile"
                  />
                </div>
                <div>
                  <p>Hacker</p>
                  <p>wecode</p>
                </div>
              </div>
              <div className="mainRight_story">
                <div className="mainRight_story_title">
                  <div>
                    <span>스토리</span>
                  </div>
                  <div>
                    <span>모두보기</span>
                  </div>
                </div>
                {user.map((userArr, i) => {
                  return (
                    <MainRightStory
                      key={userArr.id}
                      userName={userArr.userName}
                      message="test"
                      img={userArr.img}
                    />
                  );
                })}
              </div>
              <div className="mainRight_recommend">
                <div className="custom_recommend_title">
                  <div>
                    <span>회원님을 위한 추천</span>
                  </div>
                  <div>모두 보기</div>
                </div>
                <div className="custom_recommend_content">
                  <div>
                    <img
                      src="../../../../images/hyunminChoi/Main/woman1.avif"
                      alt="woman"
                      className="profileImg"
                    />
                  </div>
                  <div>
                    <div>
                      <span>woman1</span>
                    </div>
                    <div>
                      <span>_legend님 외 ...</span>
                    </div>
                  </div>
                  <div>
                    <span>팔로우</span>
                  </div>
                </div>
                <div className="custom_recommend_content">
                  <div>
                    <img
                      src="../../../../images/hyunminChoi/Main/woman1.avif"
                      alt="woman"
                      className="profileImg"
                    />
                  </div>
                  <div>
                    <div>
                      <span>woman1</span>
                    </div>
                    <div>
                      <span>_legend님 외 ...</span>
                    </div>
                  </div>
                  <div>
                    <span>팔로우</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Main;
