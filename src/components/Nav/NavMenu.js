import './NavMenu.scss';
import { FaRegUserCircle, FaRegBookmark, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function NavMenu() {
  let navigate = useNavigate();

  return (
    <div className="navMenu">
      <div className="navMenus">
        <FaRegUserCircle className="navMenuIcon" />
        <span>프로필</span>
      </div>
      <div className="navMenus">
        <FaRegBookmark className="navMenuIcon" />
        <span>저장됨</span>
      </div>
      <div className="navMenus">
        <FaCog className="navMenuIcon" />
        <span>설정</span>
      </div>
      <span
        onClick={() => {
          navigate('/login-ju');
        }}
        className="navMenuLogout"
      >
        로그아웃
      </span>
    </div>
  );
}

export default NavMenu;
