import React, { useState } from 'react';
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
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleIdInput = e => {
    setInputId(e.target.value);
  };

  const handlePwInput = e => {
    setInputPw(e.target.value);
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
              name="id"
              onChange={handleIdInput}
              className="user_id"
              type="email"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={inputId}
            />
            <input
              name="passwd"
              onChange={handlePwInput}
              className="user_pw"
              type="password"
              placeholder="비밀번호"
              minLength="6"
              value={inputPw}
            />
            <button
              onClick={goToMain}
              className={
                inputId.includes('@') && inputPw.length >= 5 ? 'active' : ''
              }
              type="submit"
              disabled={
                inputId.includes('@') && inputPw.length >= 5 ? false : true
              }
            >
              로그인
            </button>
          </form>

          <div className="and">
            <hr />
            <span>또는</span>
            <hr />
          </div>

          <div className="facebook_login">
            <Link to="/login-jy">Facebook으로 로그인</Link>
          </div>

          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </section>
    </main>
  );
}

export default Login;
