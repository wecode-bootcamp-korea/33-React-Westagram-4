import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variables.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-jy');
  };
  return (
    <main className="login">
      <section className="login_form">
        <div className="login_container">
          <header>
            <h1>Westagram</h1>
          </header>

          <form action="">
            <input
              className="user_id"
              type="email"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="user_pw"
              type="password"
              placeholder="비밀번호"
              minlength="6"
            />
            <button onClick={goToMain} className="login_btn" type="submit">
              로그인
            </button>
          </form>

          <div className="and">
            <hr />
            <span>또는</span>
            <hr />
          </div>

          <div className="facebook_login">
            <a href="#">Facebook으로 로그인</a>
          </div>

          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </section>
    </main>
  );
}

export default Login;
