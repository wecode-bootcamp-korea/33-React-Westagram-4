import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  let navigate = useNavigate();

  let [idValue, setIdValue] = useState('');
  let [pswValue, setPsValue] = useState('');

  let regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const isValid = idValue.match(regEmail) && pswValue.length >= 5;

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1 className="loginTitle">Westargram</h1>
        <div className="loginInputBox">
          <input
            onChange={e => {
              setIdValue(e.target.value);
            }}
            type="text"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={e => {
              setPsValue(e.target.value);
            }}
            type="password"
            className="password"
            placeholder="비밀번호"
          />
        </div>
        {/* <Link to="/mainpage"><button className='loginBtn' disabled={!isValid}>로그인</button></Link> */}
        <button
          onClick={() => {
            navigate('/main-hs');
          }}
          className="loginBtn"
          disabled={!isValid}
        >
          로그인
        </button>

        <div>
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
