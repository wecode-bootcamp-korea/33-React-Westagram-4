import React from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';

function Main() {
  return (
    <div>
      {/* navbar */}
      <Nav />
      {/* <nav className="navbar">
        <div className="nav_container">
          <div className="nav_left_logo">
            <i className="fa-brands fa-instagram"></i>
            <div className="left_logo_divide">|</div>
            <div className="left_logo_title">Westagram</div>
          </div>
          <input className="search" type="text" placeholder="검색" />
          <div className="nav_right_logo">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="탐색"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="하트"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="마이페이지"
            />
          </div>
        </div>
      </nav> */}
      {/* main */}
      <main className="main_section">
        <div className="main_container">
          <section className="feeds">
            <article>
              <div className="feeds_navbar">
                <div className="feeds_nav_right">
                  <img
                    className="feeds_profile_img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JfECC4oc1cHR9hzF4PCCsigqs4M0uJ_fRg&usqp=CAU"
                    alt="피카츄"
                  />
                  <div className="feed_nav_title">포켓몬스터</div>
                </div>
                <div className="feeds_nav_left">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <div className="feed_img">
                <img
                  src="http://mobiletv.skbroadband.com/images/content_img/M432/99/10/M4329910LFOA242877_200.jpg"
                  alt=""
                />
              </div>
              <div className="feeds_footer">
                <div className="footer_logo">
                  <div className="footer_logo_left">
                    <i className="fa-regular fa-heart ft_log"></i>
                    <i className="fa-regular fa-comment ft_log"></i>
                    <i className="fa-regular fa-paper-plane ft_log"></i>
                  </div>
                  <div className="footer_logo_right">
                    <i className="fa-regular fa-bookmark ft_log"></i>
                  </div>
                </div>
                <div className="footer_like">좋아요 1004개</div>
                <div className="footer_description">
                  Pocket Monster 🔥 동심을 찾아 떠나는 여행 🔥... 더 보기 댓글
                  <br />
                  14개 모두 보기
                </div>
                <div className="comment_up">
                  <div className="comment_board">
                    <div className="comment">댓글달리는 곳입니다</div>
                    <div className="comment_icon">
                      <i className="fa-regular fa-heart ft_log comment_heart"></i>
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
                <div className="footer_time">5월 2일</div>
              </div>
              <div className="feed_comment">
                <input
                  className="comment_area"
                  type="text"
                  placeholder="댓글 달기.."
                />
                <button className="input_btn">게시</button>
              </div>
            </article>
          </section>
          {/* <!-- main right --> */}
          <div className="main_right">
            <div className="right_profile">
              <div className="right_profile_picture">
                <img
                  src="https://post-phinf.pstatic.net/MjAyMDAzMDJfMjMz/MDAxNTgzMDk2NDgwNDI3.cIs4o9p5ZTNFYm-kDI8LTdzOaTFeiX9K8ERmDe1fa7Eg.MQaiZX6Lg1R79EDIFYFUX3m5hQN89HxQO5x58woiUcIg.JPEG/%EC%9E%A0%EB%A7%8C%EB%B3%B42.jpg?type=w1200"
                  alt="잠만보"
                />
                <div className="right_profile_name">
                  <div className="profile_id">Pocket_master</div>
                  <div className="profile_nickname">Pocket</div>
                </div>
              </div>
              <div className="switch_btn">Switch</div>
            </div>
            <div className="suggest_for_you">
              <div>Suggestions For You</div>
              <div className="see-all">See All</div>
            </div>
            <div className="suggest_user">
              <div className="suggest_box">
                <div className="suggest_profile_img">
                  <img
                    src="https://img.animalplanet.co.kr/news/2020/06/13/700/30jarcn5b5o82bpbxn24.jpg"
                    alt=""
                  />
                  <div className="suggest_name">
                    <div className="suggest_id">Pocket_master</div>
                    <div className="suggest_nickname">Digdag</div>
                  </div>
                </div>
                <div className="suggest_follow">Follow</div>
              </div>
              <div className="suggest_box">
                <div className="suggest_profile_img">
                  <img
                    src="https://tistory3.daumcdn.net/tistory/4492954/attach/9cf3289dac274622aa045bc3296bea6f"
                    alt=""
                  />
                  <div className="suggest_name">
                    <div className="suggest_id">Pocket_master</div>
                    <div className="suggest_nickname">Squirtle</div>
                  </div>
                </div>
                <div className="suggest_follow">Follow</div>
              </div>
              <div className="suggest_box">
                <div className="suggest_profile_img">
                  <img
                    src="https://t1.daumcdn.net/cfile/tistory/99BB433359E8C2BF32"
                    alt=""
                  />
                  <div className="suggest_name">
                    <div className="suggest_id">Pocket_master</div>
                    <div className="suggest_nickname">Charmander</div>
                  </div>
                </div>
                <div className="suggest_follow">Follow</div>
              </div>
              <div className="suggest_box">
                <div className="suggest_profile_img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPMPZMkSavqLjMiCosyWul1m7kEofgsZ-rxJD9M_5Ah-s5KprLbGFNXytqxF9MD5gd64&usqp=CAU"
                    alt=""
                  />
                  <div className="suggest_name">
                    <div className="suggest_id">Pocket_master</div>
                    <div className="suggest_nickname">Bulbasaur</div>
                  </div>
                </div>
                <div className="suggest_follow">Follow</div>
              </div>
              <div className="suggest_box">
                <div className="suggest_profile_img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsUmwOIg9waNT1-A5WlKDzMzBDTfPwL6vs7rii5D4Pf0-pa91g_AZX1Hn3srxfQJ7D7v8&usqp=CAU"
                    alt=""
                  />
                  <div className="suggest_name">
                    <div className="suggest_id">Pocket_master</div>
                    <div className="suggest_nickname">Pikachu</div>
                  </div>
                </div>
                <div className="suggest_follow">Follow</div>
              </div>
            </div>

            <div className="right_foot">
              <div className="right_foot_about">
                About Help Press API Jobs Privacy Terms <br />
                Locations Top Accounts Hashtags Language
              </div>
              <div className="right_foot_last">© 2022 INSTAGRAM FROM META</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
