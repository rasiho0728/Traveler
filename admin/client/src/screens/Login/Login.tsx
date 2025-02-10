import React, { useState } from "react";
import "./Login.css"; // 스타일 적용

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // 기본 제출 동작 방지
    
    if (!username || !password) {
      setError("모든 필드를 입력해주세요.");
      return;
    }
    
    setIsSubmitted(true); // 로그인 버튼 클릭 시 상태 변경
  };

  return (
    <div className={`wrapper ${isSubmitted ? "form-success" : ""}`}>
      <div className="container">
        <h1>관리자님 환영합니다</h1>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {!isSubmitted ? (
          <form className="form" onSubmit={handleLogin}>
            <div className="input-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0px" }}>
              <input 
                type="text" 
                placeholder="아이디" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                style={{ textAlign: "center", marginBottom: "5px" }} 
              />
              <input 
                type="password" 
                placeholder="비밀번호" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                style={{ textAlign: "center" }} 
              />
            </div>
            <button type="submit" id="login-button" style={{ marginTop: "15px" ,  marginRight: "2px"}}>
              로그인
            </button>
            <button type="submit" id="login-button" style={{ marginTop: "15px" }}>
              패스워드리스
            </button>
          </form>
        ) : null}
      </div>
      <ul className="bg-bubbles">
        {[...Array(10)].map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
};

export default Login;
