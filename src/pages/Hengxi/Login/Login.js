import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  let navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const hendleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const { id, pw } = inputValue;

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1 className="loginTitle">Westargram</h1>
        <div className="loginInputBox">
          <input
            ref={inputRef}
            onChange={hendleInput}
            name="id"
            type="text"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={hendleInput}
            name="pw"
            type="password"
            className="password"
            placeholder="비밀번호"
          />
        </div>
        <button
          onClick={() => {
            navigate('/main-hs');
          }}
          className="loginBtn"
          disabled={id.includes('@') && pw.length >= 5 ? false : true}
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
