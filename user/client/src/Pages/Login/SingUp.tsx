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
        alert(`Checking availability for ID: ${id}`);
    };

    // Email 인증 핸들러
    const handleVerifyEmail = () => {
        alert(`Sending verification email to: ${email}`);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (ssn.length !== 7) {
            alert("SSN must be exactly 7 digits!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (!phone) {
            alert("Phone number is required!");
            return;
        }

        console.log("Signing up with", { id, password, name, ssn, phone, email });
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
                        <span className="login100-form-title p-b-49">회원가입</span>

                        {/* Name 입력 */}
                        <div className="wrap-input100 validate-input m-b-15">
                            <span className="label-input100">Name</span>
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
                            <span className="label-input100">ID</span>
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
                            <span className="label-input100">Password</span>
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
                            <span className="label-input100">Confirm Password</span>
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
                            <span className="label-input100">SSN (7 Digits)</span>
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
                            <span className="label-input100">Phone</span>
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
                            <span className="label-input100">Email</span>
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