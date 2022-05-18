import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    fetch('http://10.58.4.15:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        id: idValue,
        pw: pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result))
      .then(response => {
        if (response.access_token) {
          localStorage.setItem('wtw-token', response.access_token);
          navigate('/main-hm');
        }
      });

    // fetch('http://10.58.4.15:8000/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     id: idValue,
    //     pw: pwValue,
    //     name: 'hyunmin',
    //     phonenumber: '01012341234',
    //     personal: '최현민',
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => console.log('결과: ', result));
  };

  let [idValue, setIdValue] = useState('');
  let [pwValue, setPwValue] = useState('');
  let token = localStorage.getItem('wtw-token') || '';

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
                onKeyDown={e => {
                  if (e.key === 'Enter' && isValid) {
                    navigate('/main-hm');
                  }
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
