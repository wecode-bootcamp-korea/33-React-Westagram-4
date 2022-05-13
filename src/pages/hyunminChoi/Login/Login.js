import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-hm');
  };

  let [idValue, setIdValue] = useState('');
  let [pwValue, setPwValue] = useState('');

  const isValid = idValue.includes('@') && pwValue.length >= 5;

  return (
    <div className="test">
      <section>
        <div className="loginWrapper">
          <div className="loginContainer">
            <div className="logo lobsterFont">
              <p>Westagram</p>
            </div>
            <div className="member">
              <input
                type="text"
                id="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={e => {
                  setIdValue(e.target.value);
                }}
              />
              <input
                type="passwword"
                id="password"
                placeholder="비밀번호"
                onChange={e => {
                  setPwValue(e.target.value);
                }}
              />
            </div>
            <div className="login">
              <button
                type="button"
                className={
                  idValue.includes('@') && pwValue.length >= 5
                    ? 'active'
                    : 'inactive'
                }
                onClick={goToMain}
                disabled={!isValid}
              >
                로그인
              </button>
            </div>
            <div className="help">
              <p>비밀번호를 잊으셨나요?</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
