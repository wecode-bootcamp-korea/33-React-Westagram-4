import React from 'react';
import { useState } from 'react';

// mission 2
import { useNavigate } from 'react-router-dom';

import './Login.scss';

function JungjunKimLogin() {
  let [inputIdValue, setInputIdValue] = useState('');
  let [inputPwValue, setInputPwValue] = useState('');
  // mission 2
  let navigate = useNavigate();

  let handleIdInput = event => {
    setInputIdValue(event.target.value); // id태그에 입력된 값이 state로 저장
    //console.log(event.target.value);
  };

  let handlePwInput = event => {
    setInputPwValue(event.target.value); // pw태그에 입력된 값이 state로 저장
    //console.log(event.target.value);
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1 className="loginTitle">Westargram</h1>
        <div className="loginInputBox">
          <input
            type="text"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            // 미션 1) id input 태그 onChange 이벤트
            onChange={e => {
              handleIdInput(e);
            }}
          />
          <input
            type="password"
            className="password"
            placeholder="비밀번호"
            // 미션 1) pw input 태그 onChage 이벤트
            onChange={e => {
              handlePwInput(e);
              // console.log(inputPwValue);
              // console.log(inputIdValue);
            }}
          />
          {/* <p className="emailCheck">id : '@', '.' 포함 / pw : 5글자 이상</p> */}
        </div>
        {/**mission 2) 로그인 버튼 활성화 */}
        {inputIdValue.includes('@') && inputPwValue.length >= 5 ? (
          <button
            className="loginBtnValid"
            onClick={() => {
              navigate('/main-jj');
            }}
          >
            로그인
          </button>
        ) : (
          <button className="loginBtn">로그인</button>
        )}
        <div>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default JungjunKimLogin;
