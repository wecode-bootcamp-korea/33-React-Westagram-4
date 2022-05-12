import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-ju');
  };
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="title">Westagram</div>
          <div className="input_area">
            <input
              className="id_input"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
            <input
              className="pw_input"
              type="password"
              placeholder="비밀번호"
            />
            <button className="login_btn" onClick={goToMain}>
              로그인
            </button>
          </div>
          <div className="forget_pw">비밀번호를 잊으셨나요?</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
