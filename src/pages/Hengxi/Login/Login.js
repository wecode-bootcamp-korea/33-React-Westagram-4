import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  let navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-hs');
  };

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

  const SignUp = () => {
    fetch('http://10.58.4.225:8000/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          goToMain();
        }
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
            // navigate('/main-hs');
            SignUp();
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
