import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variables.scss';

function Login() {
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

  const navigate = useNavigate();
  const goToMain = e => {
    e.preventDefault();

    // Lonin
    fetch('http://10.58.4.219:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: input.id,
        password: input.pw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.ACCESS_TOKEN) {
          localStorage.setItem('ACCESS_TOKEN', result.ACCESS_TOKEN);
        } else {
          alert('로그인 실패!');
        }
      });

    // 회원가입
    // fetch('http://10.58.4.219:8000/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: input.id,
    //     password: input.pw,
    //     name: 'jooyoung',
    //     mobile_number: '010-4063-9970',
    //     date_of_birth: '2022-06-08',
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => console.log('결과: ', result));

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
              name="id"
              onChange={handlerInput}
              className="user_id"
              type="email"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={input.id}
            />
            <input
              name="pw"
              onChange={handlerInput}
              className="user_pw"
              type="password"
              placeholder="비밀번호"
              minLength="6"
              value={input.pw}
            />
            <button
              onClick={goToMain}
              className={
                input.id.includes('@') && input.pw.length >= 5 ? 'active' : ''
              }
              type="submit"
              disabled={
                input.id.includes('@') && input.pw.length >= 5 ? false : true
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
