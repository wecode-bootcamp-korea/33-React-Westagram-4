import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import './Main.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variables.scss';

function Main() {
  return (
    <div className="main">
      <header>
        <nav>
          <h1 className="logo">
            <a href="#">Westagram</a>
          </h1>

          <input type="text" placeholder="검색" />

          <div className="icon_box">
            <a href="#">
              <img src="images/jooyoungPark/Main/explore.png" alt="탐색기" />
            </a>
            <a href="#">
              <img src="images/jooyoungPark/Main/heart.png" alt="좋아요" />
            </a>
            <a href="#">
              <img
                src="images/jooyoungPark/Main/profile.png"
                alt="나의페이지"
              />
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div className="feed">
          <article className="post">
            <div className="user_post_wrap">
              <div className="user_info">
                <div className="user_img">
                  <a href="#">
                    <img
                      src="images/jooyoungPark/Main/mini_profile.jpg"
                      alt="#"
                    />
                  </a>
                </div>
                <div className="user_name">
                  <a href="#">wecode_bootcamp</a>
                  <a href="#">WeCode - 위코드</a>
                </div>
                <button className="more_btn">더보기</button>
              </div>

              <div className="user_post_img">
                <img src="images/jooyoungPark/Main/feed.jpg" alt="" />
              </div>

              <div className="user_post_desc">
                <div className="user_check_wrap">
                  <div>
                    <button>
                      <img src="images/jooyoungPark/Main/heart.png" alt="" />
                    </button>
                    <button>
                      <img src="images/jooyoungPark/Main/chat.png" alt="" />
                    </button>
                    <button>
                      <img src="images/jooyoungPark/Main/send.png" alt="" />
                    </button>
                  </div>
                  <button>북마크</button>
                </div>
                <div className="like_count">
                  <a href="#">
                    <img
                      src="images/jooyoungPark/Main/mini_profile.jpg"
                      alt="#"
                    />
                  </a>
                  <span className="like_desc">
                    lemon님 외 4명이 좋아합니다.
                  </span>
                </div>
                <div className="user_post_content">
                  <strong>wecode_bootcamp</strong>
                  <span>
                    "위코드는 단순 교육업체가 아닌 개발자 커뮤니티 입니다.
                    Wecode에서 배우고 저는 총 5개 회사에서 오퍼를 받았습니다.
                  </span>
                  <button className="more_btn">더보기</button>
                  <ul className="coment_new" />
                  <button className="more_comment">댓글 147개 모두 보기</button>
                </div>
              </div>

              <form className="comment_wrap">
                <input type="text" placeholder="댓글 달기..." required />
                <button className="comment_enter">게시</button>
              </form>
            </div>
          </article>
        </div>

        <div className="main_right">
          <div className="user_info user_info_right">
            <div className="user_info_main">
              <a href="#">
                <img src="images/jooyoungPark/Main/mini_profile.jpg" alt="#" />
              </a>
            </div>
            <div className="user_name">
              <a href="#">wecode_bootcamp</a>
              <a href="#">WeCode - 위코드</a>
            </div>
          </div>

          <div className="main_right_box">
            <div className="story_head">
              <p>스토리</p>
              <a href="">모두 보기</a>
            </div>
            <ul>
              <li className="user_progile_mini">
                <a href="">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </a>
                <div>
                  <a href="">alexishyuni</a>
                  <p>2시간 전</p>
                </div>
              </li>
              <li className="user_progile_mini">
                <a href="">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </a>
                <div>
                  <a href="">alexishyuni</a>
                  <p>2시간 전</p>
                </div>
              </li>
              <li className="user_progile_mini">
                <a href="">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </a>
                <div>
                  <a href="">alexishyuni</a>
                  <p>2시간 전</p>
                </div>
              </li>
              <li className="user_progile_mini">
                <a href="">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </a>
                <div>
                  <a href="">alexishyuni</a>
                  <p>2시간 전</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="main_right_box">
            <div className="story_head">
              <p>회원님을 위한 추천</p>
              <a href="">모두 보기</a>
            </div>
            <ul>
              <li className="user_progile_mini">
                <a href="">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </a>
                <div>
                  <a href="">alexishyuni</a>
                  <p>회원님을 위한 추천</p>
                </div>
                <button className="follow">팔로우</button>
              </li>
              <li className="user_progile_mini">
                <a href="">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </a>
                <div>
                  <a href="">__g90ng_dm</a>
                  <p>회원님을 위한 추천</p>
                </div>
                <button className="follow">팔로우</button>
              </li>
              <li className="user_progile_mini">
                <a href="">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </a>
                <div>
                  <a href="">hsu_koreanart2021</a>
                  <p>회원님을 위한 추천</p>
                </div>

                <button className="follow">팔로우</button>
              </li>
              <li className="user_progile_mini">
                <a href="">
                  <img
                    src="images/jooyoungPark/Main/mini_profile.jpg"
                    alt="사용자 프로필 사진"
                  />
                </a>
                <div>
                  <a href="">kimmy_cafe</a>
                  <p>회원님을 위한 추천</p>
                </div>
                <button className="follow">팔로우</button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
