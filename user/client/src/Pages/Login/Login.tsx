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
            <span className="login100-form-title p-b-49">Login</span>

            <div className="wrap-input100 validate-input m-b-23">
              <span className="label-input100">Username</span>
              <input
                className="input100"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your username"
                required
              />
              <span className="focus-input100" data-symbol="&#xf206;"></span>
            </div>

            <div className="wrap-input100 validate-input">
              <span className="label-input100">Password</span>
              <input
                className="input100"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type your password"
                required
              />
              <span className="focus-input100" data-symbol="&#xf190;"></span>
            </div>

            <div className="text-right p-t-8 p-b-31">
              <a href="#">Forgot password?</a>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button type="submit" className="login100-form-btn">Login</button>
              </div>

              <div className="wrap-login100-form-btn passwordless">
                <div className="login100-form-bgbtn"></div>
                <button type="submit" className="login100-form-btn">Passwordless Login</button>
              </div>
            </div>

            <div className="txt1 text-center p-t-30 p-b-15">
              <span>Or Sign Up Using</span>
            </div>

            <div className="flex-c-m">
              <a href="#" className="login100-social-item bg1"><i className="fa4 fa-facebook"></i></a>
              <a href="#" className="login100-social-item bg2"><i className="fa4 fa-twitter"></i></a>
              <a href="#" className="login100-social-item bg3"><i className="fa4 fa-google"></i></a>
            </div>

            <div className="flex-col-c p-t-25">
              {/* Sign Up을 Link로 변경 */}
              <Link to="/traveler/singup" className="txt2">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
