import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-ju');
  };

  let [id, setId] = useState('');
  let [pw, setPw] = useState('');
  let [disabled, setDisabled] = useState(true);
  let [backgroundColor, setBackgroundColor] = useState('rgb(204, 231, 255)');

  function handleIdInput(e) {
    setId(e.target.value);
    console.log('id', id);
  }

  function handlePwInput(e) {
    setPw(e.target.value);
    console.log('pw', pw);
    if (id.includes('@') && pw.length >= 4) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    id.includes('@') && pw.length >= 4
      ? setBackgroundColor('rgb(63, 157, 251)')
      : setBackgroundColor('rgb(204, 231, 255)');
  }

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="title">Westagram</div>
          <div className="input_area">
            <input
              onChange={handleIdInput}
              className="id_input"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
            <input
              onChange={handlePwInput}
              className="pw_input"
              type="password"
              placeholder="비밀번호"
            />
            <button
              className="login_btn"
              disabled={disabled}
              onClick={goToMain}
              style={{ backgroundColor: backgroundColor }}
            >
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
