import React, { useState } from 'react';
import './Main.scss';

// 아이콘들 import 해오기
import { FiInstagram } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { BsFillHouseDoorFill } from 'react-icons/bs';

function JungjunKimMain() {
  // 댓글창에 입력한 값 저장할 state
  let [inputArticleValue, setInputArticleValue] = useState('');
  // 댓글
  let [댓글모음배열, 댓글모음배열바꾸기] = useState(['Good']);

  return (
    <div className="mainPage">
      {/* <!-- 네브바 --> */}
      <nav>
        <div className="navBack">
          <div className="navImgTitle">
            <FiInstagram className="navImg" />
            <p className="navTitle">Westargram</p>
          </div>
          <div className="navInputFlex">
            <div className="navInputBox">
              <input className="navInput" type="text" placeholder="검색" />
              <BiSearch className="biSearch" />
              {/* <!-- 아이디 검색 기능 --> */}
              <div className="searchId">
                <p className="searchIdInfo">아이디를 입력해주세요</p>
                {/* <!-- <div className="searchBox">
                        <img alt="profile image" className="searchImg" src="profile.jpg" />
                        <span className="searchText">wecode_bootcamp</span>
                    </div> --> */}
              </div>
            </div>
          </div>
          <div className="navIconFlex">
            {/** <i className="fa-solid fa-house navIcon"></i> */}
            <BsFillHouseDoorFill className="navIcon" />
            <i className="fa-regular fa-compass navIcon" />
            <i className="fa-regular fa-heart navIcon" />
            <i className="fa-regular fa-user navIcon" />
            <div className="navMenu">
              <div className="navMenus">
                <i className="fa-regular fa-user navMenuIcon" />
                <span>프로필</span>
              </div>
              <div className="navMenus">
                <i className="fa-regular fa-bookmark navMenuIcon" />
                <span>저장됨</span>
              </div>
              <div className="navMenus">
                <i className="fa-solid fa-gear navMenuIcon" />
                <span>설정</span>
              </div>
              <span className="navMenuLogout">로그아웃</span>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section>
          <article>
            <div className="articleHeader">
              <img
                alt="profile"
                className="articleProfileImg"
                src="/images/jungjun/Main/profile.png"
              />
              {/** 왜 /public/images/... 이 아님? 최상위 루트가 public? */}
              <div className="articleProfileTitle">
                <span className="articleNickname">wecode_bootcamp</span>
                <p className="articlePlace">woCode - 위코드</p>
              </div>
              <i className="fa-solid fa-ellipsis articleHeaderIcon" />
            </div>
            <img
              alt="article image"
              className="articleImg"
              src="/images/jungjun/Main/articleImage.jpg"
            />
            <div className="articleIconBox">
              <div className="articleIconBoxLeft">
                <i className="fa-regular fa-heart articleIcons" />
                <i className="fa-regular fa-comment articleIcons" />
                <i className="fa-solid fa-arrow-up-from-bracket articleIcons" />
              </div>
              <div className="articleIconBoxRight">
                <i className="fa-regular fa-bookmark articleIcons" />
              </div>
            </div>
            <div className="articleContent">
              <p>
                <span className="liksNickname">jungjun</span>님 외{' '}
                <span>4</span>
                명이 좋아합니다.
              </p>
              {/** mission 3) 댓글 기능 구현 */}
              {댓글모음배열.map(function (a, i) {
                return (
                  <div className="articleCommentBox" key={i}>
                    <span className="articleNickname">unknownUser{i + 1}</span>
                    <span className="articleComment">{a}</span>
                    <div className="likeIcon">
                      <p className="articleTime">{i}분전</p>
                      {/* <!-- <i className="fa-regular fa-heart likeIconsHeart likeIcons"></i>
                            <i className="fa-solid fa-delete-left likeIconsDelete likeIcons"></i> --> */}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="articleInputBox">
              <input
                className="articleInput"
                value={inputArticleValue}
                type="text"
                placeholder="댓글달기..."
                // mission 3) 댓글 내용 state에 저장
                onChange={e => {
                  setInputArticleValue(e.target.value);
                }}
              />
              <button
                className="articlePost"
                onClick={() => {
                  let copy = [...댓글모음배열];
                  copy.push(inputArticleValue);
                  댓글모음배열바꾸기(copy);
                  setInputArticleValue('');
                  // console.log(inputArticleValue); 실행시점 문제... console.log가 먼저 실행
                }}
              >
                게시
              </button>
            </div>
          </article>
        </section>
        <aside>
          <div className="asideFixed">
            <div className="asideProfile">
              <div className="aisdeProfileBox">
                <img
                  alt="profile image"
                  className="aisdeProfileImg"
                  src="/images/jungjun/Main/profile.png"
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
                <div className="storyProfiles">
                  <div className="storyProfilesImgBox">
                    <img
                      alt="story image"
                      className="storyProfilesImg"
                      src="/images/jungjun/Main/profile.png"
                    />
                  </div>
                  <div className="storyProfileIdBox">
                    <span className="storyProfileId">wecode_bootcamp</span>
                    <p className="storyProfileTime">1시간 전</p>
                  </div>
                </div>
                <div className="storyProfiles">
                  <div className="storyProfilesImgBox">
                    <img
                      alt="story image"
                      className="storyProfilesImg"
                      src="/images/jungjun/Main/profile.png"
                    />
                  </div>
                  <div className="storyProfileIdBox">
                    <span className="storyProfileId">wecode_bootcamp</span>
                    <p className="storyProfileTime">1시간 전</p>
                  </div>
                </div>
                <div className="storyProfiles">
                  <div className="storyProfilesImgBox">
                    <img
                      alt="story image"
                      className="storyProfilesImg"
                      src="/images/jungjun/Main/profile.png"
                    />
                  </div>
                  <div className="storyProfileIdBox">
                    <span className="storyProfileId">wecode_bootcamp</span>
                    <p className="storyProfileTime">1시간 전</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="asideStory">
              <div className="storyTitleBox">
                <p className="storyTitle">회원님을 위한 추천</p>
                <span className="storyTitleContent">모두 보기</span>
              </div>
              <div className="storyProfile">
                <div className="storyProfiles">
                  <img
                    alt="story image"
                    className="storyProfilesImg"
                    src="/images/jungjun/Main/profile.png"
                  />
                  <div className="storyProfileIdBox recomendBox">
                    <span className="storyProfileId">wecode_bootcamp</span>
                    <p className="storyProfileTime">
                      wecode님 외 100명이 follow합니다.
                    </p>
                  </div>
                  <p className="follow">팔로우</p>
                </div>
                <div className="storyProfiles">
                  <img
                    alt="story image"
                    className="storyProfilesImg"
                    src="/images/jungjun/Main/profile.png"
                  />
                  <div className="storyProfileIdBox recomendBox">
                    <span className="storyProfileId">wecode_bootcamp</span>
                    <p className="storyProfileTime">
                      wecode님 외 100명이 follow합니다.
                    </p>
                  </div>
                  <p className="follow">팔로우</p>
                </div>
                <div className="storyProfiles">
                  <img
                    alt="story image"
                    className="storyProfilesImg"
                    src="/images/jungjun/Main/profile.png"
                  />
                  <div className="storyProfileIdBox recomendBox">
                    <span className="storyProfileId">wecode_bootcamp</span>
                    <p className="storyProfileTime">
                      wecode님 외 100명이 follow합니다.
                    </p>
                  </div>
                  <p className="follow">팔로우</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
export default JungjunKimMain;
