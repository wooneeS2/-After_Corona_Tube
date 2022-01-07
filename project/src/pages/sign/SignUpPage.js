import "../../design/signIn.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const isEmail = email => {
  const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return emailRegex.test(email);
};
export const borderStyle = { border: "0.3rem solid #e06666" };

export function SignUpPage() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const url =
    "http://elice-kdt-3rd-team-16.koreacentral.cloudapp.azure.com/auth/register";

  const navigate = useNavigate();
  const postUserData = async () => {
    const signupFormData = new FormData();
    signupFormData.append("email", userInfo.email);
    signupFormData.append("name", userInfo.name);
    signupFormData.append("password", userInfo.password);

    try {
      const response = await axios({
        method: "post",
        url: url,
        data: signupFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(signupFormData);
      console.log(response);
      navigate("/sign-up/complete");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="log-in-box">
        <p id="log-in-title">회원가입</p>

        <form>
          <div id="user-id-box">
            <div id="user-pw-box">
              <div id="log-in-subtitle">이름</div>
              <input
                type="text"
                name="user-pw"
                id="user-input"
                placeholder="이름을 입력해주세요."
                onChange={e => {
                  setUserInfo({
                    ...userInfo,
                    name: e.target.value,
                  });
                }}
                style={userInfo.name !== "" ? borderStyle : {}}
              />
            </div>
            <div id="log-in-subtitle">이메일</div>

            <input
              type="text"
              name="user-id"
              id="user-input"
              placeholder="이메일을 입력해주세요."
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
                setUserInfo({
                  ...userInfo,
                  password: e.target.value,
                });
              }}
              style={userInfo.password !== "" ? borderStyle : {}}
            />
          </div>
          <button
            type="submit"
            id="user-log-in-btn"
            onClick={e => {
              e.preventDefault();
              console.log(userInfo);
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
      </div>
    </>
  );
}
export default SignUpPage;
