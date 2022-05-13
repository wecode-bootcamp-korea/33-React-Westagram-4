import './Nav.scss';
import { useState } from 'react';
import NavMenu from './NavMenu';
import {
  FaRegHeart,
  FaHome,
  FaRegCompass,
  FaRegUserCircle,
  FaSearch,
} from 'react-icons/fa';
import instargramImeage from './instagram_empty.png';

function Nav() {
  let [navMenu, setNavMenu] = useState(false);
  let [searchNav, setSearchNav] = useState(false);

  //추가 필요 구현 사항
  //메뉴 박스 바깥 영역 클릭 시에는 다시 닫히도록 구현
  //아이디 검색 기능 구현

  return (
    <nav>
      <div className="navBack">
        <div className="navImgTitle">
          <img alt="instargramImg" className="navImg" src={instargramImeage} />
          <p className="navTitle">Westargram</p>
        </div>
        <div className="navInputFlex">
          <div className="navInputBox">
            <input
              onClick={() => {
                setSearchNav(!searchNav);
              }}
              className="navInput"
              type="text"
              placeholder="검색"
            />
            <FaSearch className="searchIcon" />
            {/* <!-- 아이디 검색 기능 --> */}

            {searchNav === true ? (
              <div className="searchId">
                <p className="searchIdInfo">아이디를 입력해주세요</p>
                {/* <div className="searchBox">
                                <img alt="profile image" className="searchImg" src="profile.jpg"/>
                                <span className="searchText">wecode_bootcamp</span>
                            </div> */}
              </div>
            ) : null}
          </div>
        </div>
        <div className="navIconFlex">
          <FaHome className="navIcon" />
          <FaRegHeart className="navIcon" />
          <FaRegCompass className="navIcon" />
          <FaRegUserCircle
            className="navIcon"
            onClick={() => {
              setNavMenu(!navMenu);
            }}
          />
          {navMenu === true ? <NavMenu /> : null}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
