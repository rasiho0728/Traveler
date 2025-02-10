import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link 추가
import "../../css/login_main.css";
import "../../css/login_util.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="limiter">
      <div className="container-login100" style={{ backgroundImage: "url('/images/bg-01.jpg')" }}>
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54 login-box">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title p-b-49">로그인</span>

            <div className="wrap-input100 validate-input m-b-23">
              <span className="label-input100">아이디</span>
              <input
                className="input100"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="아이디를 입력하세요"
                required
              />
              <span className="focus-input100" data-symbol="&#xf206;"></span>
            </div>

            <div className="wrap-input100 validate-input">
              <span className="label-input100">비밀번호</span>
              <input
                className="input100"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                required
              />
              <span className="focus-input100" data-symbol="&#xf190;"></span>
            </div>

            <div className="text-right p-t-8 p-b-31">
              <a href="#">비밀번호를 잊어버리셨나요?</a>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button type="submit" className="login100-form-btn">로그인</button>
              </div>

              <div className="wrap-login100-form-btn passwordless">
                <div className="login100-form-bgbtn"></div>
                <button type="submit" className="login100-form-btn">패스워드리스 로그인</button>
              </div>
            </div>

            <div className="txt1 text-center p-t-30 p-b-15">
              <span>연동 로그인</span>
            </div>

            <div className="flex-c-m">
            <a href="#" className="login100-social-item bg1">
    <img src="/images/kakao-talk.png" alt="Kakao Login" style={{ width: "40px", height: "40px" }} />
  </a>
              <a href="#" className="login100-social-item bg2">
    <img src="/images/naver.png" alt="Naver Login" style={{ width: "40px", height: "40px" }} />
  </a>
              {/* <a href="#" className="login100-social-item bg3"><i className="fa4 fa-google"></i></a> */}
            </div>

            <div className="flex-col-c p-t-25">
              {/* Sign Up을 Link로 변경 */}
              <Link to="/traveler/signselect" className="txt2">아직 회원이 아니신가요? 회원가입</Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
