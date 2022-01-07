import "../../design/signIn.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { isEmail, borderStyle } from "./SignUpPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//TODO 로그인 성공하면 로그인 버튼 사용자 이름으로 바꾸기

export function SignInPage() {
  const [userInfo, setUserInfo] = useState({ email: "", pw: "" });
  const [emailError, setEmailError] = useState(false);
  const url =
    "http://elice-kdt-3rd-team-16.koreacentral.cloudapp.azure.com/auth/login";
  const navigate = useNavigate();
  const postUserData = async () => {
    const signinFormData = new FormData();
    signinFormData.append("email", userInfo.email);
    signinFormData.append("password", userInfo.pw);

    try {
      const response = await axios({
        method: "post",
        url: url,
        data: signinFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="log-in-box">
        <p id="log-in-title">로그인</p>

        <form>
          <div id="user-id-box">
            <div id="log-in-subtitle">이메일</div>

            <input
              type="text"
              name="user-id"
              id="user-input"
              placeholder="가입한 이메일을 입력해주세요."
              onChange={e => {
                setUserInfo({
                  ...userInfo,
                  email: e.target.value,
                });
              }}
              style={userInfo.email !== "" ? borderStyle : {}}
            />
            {emailError && (
              <div style={{ color: "red", fontSize: "1rem" }}>
                올바른 이메일을 입력해주세요.
              </div>
            )}
          </div>
          <div id="user-pw-box">
            <div id="log-in-subtitle">비밀번호</div>
            <input
              type="password"
              name="user-pw"
              id="user-input"
              placeholder="비밀번호를 입력해주세요."
              onChange={e => {
                setUserInfo({ ...userInfo, pw: e.target.value });
              }}
              style={userInfo.pw !== "" ? borderStyle : {}}
            />
          </div>
          <button
            type="submit"
            id="user-log-in-btn"
            onClick={e => {
              e.preventDefault();
              const isValidation = isEmail(userInfo.email);
              if (!isValidation) {
                setEmailError(true);
                console.log("error", emailError);
              } else {
                setEmailError(false);
                postUserData();
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

export default SignInPage;
