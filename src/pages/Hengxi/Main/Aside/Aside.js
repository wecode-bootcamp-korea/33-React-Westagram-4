import './Aside.scss';

function Aside() {
  return (
    <aside>
      <div className="asideFixed">
        <div className="asideProfile">
          <div className="aisdeProfileBox">
            <img
              alt="profileImg"
              className="aisdeProfileImg"
              src="./images/Hengxi/Main/profile.jpg"
            />
          </div>
          <div className="asideProfileIdBox">
            <span className="aisdeProfileId">wecode_bootcamp</span>
            <p className="aisdeProfileName">woCode | 위코드</p>
          </div>
        </div>
        <div className="asideStory">
          <div className="storyTitleBox">
            <p className="storyTitle">스토리</p>
            <span className="storyTitleContent">모두 보기</span>
          </div>
          <div className="storyProfile">
            <AsideStory />
            <AsideStory />
            <AsideStory />
          </div>
        </div>
        <div className="asideStory">
          <div className="storyTitleBox">
            <p className="storyTitle">회원님을 위한 추천</p>
            <span className="storyTitleContent">모두 보기</span>
          </div>
          <div className="storyProfile">
            <AsideRecommend />
            <AsideRecommend />
            <AsideRecommend />
          </div>
        </div>
      </div>
    </aside>
  );
}

function AsideStory() {
  return (
    <div className="storyProfiles">
      <div className="storyProfilesImgBox">
        <img
          alt="storyImg"
          className="storyProfilesImg"
          src="./images/Hengxi/Main/profile.jpg"
        />
      </div>
      <div className="storyProfileIdBox">
        <span className="storyProfileId">wecode_bootcamp</span>
        <p className="storyProfileTime">1시간 전</p>
      </div>
    </div>
  );
}

function AsideRecommend() {
  return (
    <div className="storyProfiles">
      <img
        alt="storyImg"
        className="storyProfilesImg"
        src="./images/Hengxi/Main/profile.jpg"
      />
      <div className="storyProfileIdBox recomendBox">
        <span className="storyProfileId">wecode_bootcamp</span>
        <p className="storyProfileTime">wecode님 외 100명이 팔로우합니다.</p>
      </div>
      <p className="follow">팔로우</p>
    </div>
  );
}

export default Aside;
