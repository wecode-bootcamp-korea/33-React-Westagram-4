import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss'; //link css
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-sy');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const isValidEmail = id.includes('@') && id.includes('.');
  const isValidPassword = pw.length >= 5;

  const isValidLogin = isValidEmail && isValidPassword;
  const loginAlert = () => {
    if (!isValidEmail) {
      alert('Invalid Email');
      return false;
    } else if (!isValidPassword) {
      alert('Invalid Password');
      return false;
    } else {
      return true;
    }
  };

  function handleIdInput(e) {
    setId(e.target.value);
  }

  function handlePwInput(e) {
    setPw(e.target.value);
  }

  return (
    <>
      <div className="login-container">
        <h1>Westagram</h1>
        <form>
          <input
            onChange={handleIdInput}
            type="text"
            placeholder="Phone number, username or email address"
            className="login-input"
            id="id"
          />
          <input
            onChange={handlePwInput}
            type="password"
            placeholder="Password"
            className="login-input"
            id="pw"
            onkeydown="activateBtn()"
          />
          <button
            className={
              isValidLogin ? 'login-btn-activated' : 'login-btn-deactivated'
            }
            type="submit"
            onClick={goToMain}
          >
            Log In
          </button>
        </form>
        <div className="divider">OR</div>
        <div className="fb-wrapper">
          <div className="fb">
            <a href="https://facebook.com">
              <img src="/images/sooyeonJang/facebook.png" alt="facebook-logo" />
              Log in with Facebook
            </a>
          </div>
        </div>
        <div className="forgot-wrapper">
          <div className="forgot">
            <a href="https://www.instagram.com/accounts/password/reset/">
              Forgotten your password?
            </a>
          </div>
        </div>
      </div>
      <div className="sign-up">
        <p>
          Don't have an account?{' '}
          <a href="https://www.instagram.com/accounts/emailsignup/">Sign up</a>
        </p>
      </div>
    </>
  );
};

export default Login;
