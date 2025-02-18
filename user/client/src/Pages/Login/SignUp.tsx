import React, { useState } from "react";

const SingUp: React.FC = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [ssn, setSsn] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailCode, setEmailCode] = useState(""); // 사용자가 입력할 인증 코드
    const [generatedCode, setGeneratedCode] = useState(""); // 서버에서 받은 인증 코드
    const [isVerified, setIsVerified] = useState(false); // 이메일 인증 여부


    // ID 중복 확인 핸들러
    const handleCheckDuplicateId = () => {
        alert(`아이디 사용 가능 여부 확인: ${id}`);
    };

    // 이메일 인증 코드 전송 핸들러 (랜덤 코드 생성)
    const handleVerifyEmail = () => {
        if (!email) {
            alert("이메일을 입력해주세요!");
            return;
        }

        // 랜덤 6자리 숫자 생성 (테스트용)
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedCode(code);
        alert(`인증 코드가 ${email}로 전송되었습니다! (테스트 코드: ${code})`);
    };

    // 이메일 인증 코드 확인 핸들러
    const handleVerifyEmailCode = () => {
        if (emailCode === generatedCode) {
            setIsVerified(true);
            alert("이메일 인증이 완료되었습니다!");
        } else {
            alert("인증 코드가 올바르지 않습니다.");
        }
    };




    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (ssn.length !== 7) {
            alert("주민번호는 정확히 7자리여야 합니다!");
            return;
        }

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (!phone) {
            alert("전화번호는 필수 입력 사항입니다!");
            return;
        }

        if (!isVerified) {
            alert("이메일 인증을 완료해주세요!");
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

                        {/* ✅ 이메일 인증 코드 입력 + 확인 버튼 (한 줄로 추가) */}
                        {/* <div className="wrap-input100 validate-input m-b-15" style={inputContainerStyle}>
                            <span className="label-input100">코드</span>
                            <div style={inputContainerStyle}>
                                <input
                                    className="input100"
                                    type="text"
                                    value={emailCode}
                                    onChange={(e) => setEmailCode(e.target.value)}
                                    placeholder="인증 코드 입력"
                                    required
                                    maxLength={6}
                                />
                                <button
                                    type="button"
                                    style={checkBtnStyle}
                                    onClick={handleVerifyEmailCode}
                                >
                                    확인
                                </button>
                            </div>
                        </div> */}
                        {/* ✅ 이메일 인증 코드 입력 + 확인 버튼 */}
                        <div className="wrap-input100 validate-input m-b-23" style={inputGroupStyle}>
                            <span className="label-input100">인증 코드</span>
                            <div style={inputContainerStyle}>
                                <input
                                    className="input100"
                                    type="text" // ✅ 타입을 "text"로 변경
                                    value={emailCode}
                                    onChange={(e) => setEmailCode(e.target.value)}
                                    placeholder="인증 코드 입력"
                                    required
                                    maxLength={6}
                                />
                                  <span className="focus-input100" data-symbol="&#xf15a;"></span>
                               
                                <button type="button" style={checkBtnStyle} onClick={handleVerifyEmailCode}>
                                    확인
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