import "../design/logIn.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { isEmail, borderStyle } from "./SignUpPage";

//TODO post 기능
//TODO 로그인 성공화면 만들기

export function LogInPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");
  const [emailError, setEmailError] = useState(false);
  return (
    <>
      <div className="log-in-box">
        <p id="log-in-title">로그인</p>

        <form>
          <div id="user-id-box">
            <div id="log-in-id-title">이메일</div>

            <input
              type="text"
              name="user-id"
              id="user-id-input"
              placeholder="가입한 이메일을 입력해주세요."
              onChange={e => {
                setUserEmail(e.target.value);
              }}
              style={userEmail !== "" ? borderStyle : {}}
            />
            {emailError && (
              <div style={{ color: "red", fontSize: "1rem" }}>
                올바른 이메일을 입력해주세요.
              </div>
            )}
          </div>
          <div id="user-pw-box">
            <div id="log-in-pw-title">비밀번호</div>
            <input
              type="password"
              name="user-pw"
              id="user-pw-input"
              placeholder="비밀번호를 입력해주세요."
              onChange={e => {
                setUserPw(e.target.value);
              }}
              style={userPw !== "" ? borderStyle : {}}
            />
          </div>
          <button
            type="submit"
            id="user-log-in-btn"
            onClick={e => {
              e.preventDefault();
              const isValidation = isEmail(userEmail);
              if (!isValidation) {
                setEmailError(true);
                console.log("error", emailError);
              } else {
                setEmailError(false);
              }
            }}
          >
            확인
          </button>
        </form>
        <Link to="/sign-up">
          <button id="user-log-in-btn">회원가입 하러 가기</button>
        </Link>
      </div>
    </>
  );
}

export default LogInPage;
