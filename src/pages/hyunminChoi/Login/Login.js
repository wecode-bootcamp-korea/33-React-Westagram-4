import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    // ********** 로그인 API **********
    // fetch('http://10.58.4.15:8000/users/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: token,
    //   },
    //   body: JSON.stringify({
    //     id: input.id,
    //     pw: input.pw,
    //   }),
    // })
    //   .then(response => response.json())
    //   // .then(result => console.log('결과: ', result))
    //   .then(response => {
    //     if (response.access_token) {
    //       localStorage.setItem('wtw-token', response.access_token);
    //       navigate('/main-hm');
    //     }
    //   });
    navigate('/main-hm');

    // ********** 회원가입 API **********
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

  // const token = localStorage.getItem('wtw-token') || '';

  // ********** 계산된 속성명을 이용한 inputHandler 함수 합치기 수정 이전**********
  // let [idValue, setIdValue] = useState('');
  // let [pwValue, setPwValue] = useState('');
  // const isValid = idValue.includes('@') && pwValue.length >= 5;

  const [input, setInput] = useState({
    id: '',
    pw: '',
  });

  const handlerInput = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const isValid = input.id.includes('@') && input.pw.length >= 5;

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
                name="id"
                type="text"
                id="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handlerInput}
                onKeyDown={e => {
                  if (e.key === 'Enter' && isValid) {
                    navigate('/main-hm');
                  }
                }}
              />
              <input
                name="pw"
                type="passwword"
                id="password"
                placeholder="비밀번호"
                onChange={handlerInput}
              />
            </div>
            <div className="login">
              <button
                type="button"
                className={
                  input.id.includes('@') && input.pw.length >= 5
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
