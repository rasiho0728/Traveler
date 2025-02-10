import React, { useState } from "react";

const SingUp: React.FC = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [ssn, setSsn] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    // ID 중복 확인 핸들러
    const handleCheckDuplicateId = () => {
        alert(`아이디 사용 가능 여부 확인: ${id}`);
    };

    // Email 인증 핸들러
    const handleVerifyEmail = () => {
        alert(`인증 이메일 보내는 중: ${email}`);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (ssn.length !== 7) {
            alert("주민번호는 정확히 7자리여야합니다!");
            return;
        }

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다");
            return;
        }

        if (!phone) {
            alert("전화번호는 필수 입력 사항입니다!");
            return;
        }

        console.log("작성한 정보로 회원가입 진행 중", { id, password, name, ssn, phone, email });
    };

    // ✅ 스타일 객체 정의 (React에서 style은 객체 형태여야 함)
    const inputGroupStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
    };

    const inputContainerStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    };

    const checkBtnStyle: React.CSSProperties = {
        background: "linear-gradient(90deg, #a100ff, #7a00e6)",
        color: "white",
        border: "none",
        padding: "8px 12px",
        fontSize: "14px",
        borderRadius: "5px",
        cursor: "pointer",
        marginLeft: "10px",
        whiteSpace: "nowrap",
    };

    return (
        <div className="limiter">
            <div className="container-login100" style={{ backgroundImage: "url('/images/bg-01.jpg')" }}>
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54 login-box">
                    <form className="login100-form validate-form" onSubmit={handleSubmit}>
                        <span className="login100-form-title p-b-49">일반 회원</span>

                        {/* Name 입력 */}
                        <div className="wrap-input100 validate-input m-b-15">
                            <span className="label-input100">성명</span>
                            <input
                                className="input100"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="이름 입력"
                                required
                            />
                            <span className="focus-input100" data-symbol="&#xf206;"></span>
                        </div>

                        {/* ID 입력 + 중복 확인 버튼 */}
                        <div className="wrap-input100 validate-input m-b-15" style={inputGroupStyle}>
                            <span className="label-input100">아이디</span>
                            <div style={inputContainerStyle}>
                                <input
                                    className="input100"
                                    type="text"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    placeholder="아이디 입력"
                                    required
                                />
                                <span className="focus-input100" data-symbol="&#xf201;"></span>
                                <button
                                    type="button"
                                    style={checkBtnStyle}
                                    onClick={handleCheckDuplicateId}
                                >
                                    중복 확인
                                </button>
                            </div>
                        </div>

                        {/* Password 입력 */}
                        <div className="wrap-input100 validate-input m-b-15">
                            <span className="label-input100">비밀번호</span>
                            <input
                                className="input100"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="영문, 대문자와 숫자, 특수문자를 포함한 8자리"
                                required
                            />
                            <span className="focus-input100" data-symbol="&#xf190;"></span>
                        </div>

                        {/* Password 확인 입력 */}
                        <div className="wrap-input100 validate-input m-b-15">
                            <span className="label-input100">비밀번호 확인</span>
                            <input
                                className="input100"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="비밀번호 일치 확인"
                                required
                            />
                            <span className="focus-input100" data-symbol="&#xf190;"></span>
                        </div>

                        {/* SSN 입력 (7자리) */}
                        <div className="wrap-input100 validate-input m-b-15">
                            <span className="label-input100">주민등록번호 (7 자리까지)</span>
                            <input
                                className="input100"
                                type="text"
                                value={ssn}
                                onChange={(e) => setSsn(e.target.value)}
                                placeholder="주민번호 7자리 입력(- 제외)"
                                required
                                maxLength={7}
                            />
                            <span className="focus-input100" data-symbol="&#xf1c7;"></span>
                        </div>

                        {/* Phone 입력 */}
                        <div className="wrap-input100 validate-input m-b-15">
                            <span className="label-input100">휴대폰 번호</span>
                            <input
                                className="input100"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="전화번호 11자리 입력(- 제외)"
                                required
                                maxLength={11}
                            />
                            <span className="focus-input100" data-symbol="&#xf2c8;"></span>
                        </div>

                        {/* Email 입력 + 인증 버튼 */}
                        <div className="wrap-input100 validate-input m-b-23" style={inputGroupStyle}>
                            <span className="label-input100">이메일</span>
                            <div style={inputContainerStyle}>
                                <input
                                    className="input100"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="이메일 입력"
                                    required
                                />
                                <span className="focus-input100" data-symbol="&#xf15a;"></span>
                                <button
                                    type="button"
                                    style={checkBtnStyle}
                                    onClick={handleVerifyEmail}
                                >
                                    인증
                                </button>
                            </div>
                        </div>

                        {/* 회원가입 버튼 */}
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button type="submit" className="login100-form-btn">회원가입</button>
                            </div>
            
    
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;