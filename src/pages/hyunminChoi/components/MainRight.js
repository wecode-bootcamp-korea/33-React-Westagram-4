import React from 'react';
import MainRightStory from './MainRightStory';

function MainRight() {
  let user = [
    {
      id: 1,
      userName: 'ironman',
      img: 'images/hyunminChoi/Main/man1.avif',
    },
    {
      id: 2,
      userName: 'aquaman',
      img: 'images/hyunminChoi/Main/man2.avif',
    },
    {
      id: 3,
      userName: 'batman',
      img: 'images/hyunminChoi/Main/man3.avif',
    },
  ];

  return (
    <div className="mainRight">
      <div className="mainRight_account">
        <div>
          <img src="images/hyunminChoi/Main/developer.avif" alt="myProfile" />
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
              src="images/hyunminChoi/Main/woman1.avif"
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
  );
}

export default MainRight;
