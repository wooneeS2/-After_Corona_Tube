import "../design/logIn.css";
import { Link } from "react-router-dom";

export function LogInPage() {
  return (
    <>
      <div className="log-in-box">
        <p id="log-in-title">로그인</p>

        <form>
          <div id="user-id-box">
            <div id="log-in-id-title">아이디</div>

            <input type="text" name="user-id" id="user-id-input" />
          </div>
          <div id="user-pw-box">
            <div id="log-in-pw-title">비밀번호</div>
            <input type="password" name="user-pw" id="user-pw-input" />
          </div>
          <button
            type="submit"
            id="user-log-in-btn"
            onClick={e => {
              e.preventDefault();
              console.log("logIn");
            }}
          >
            확인
          </button>
        </form>
        <button id="user-log-in-btn">
          <Link to="/sign-up">회원가입 하러 가기</Link>
        </button>
      </div>
    </>
  );
}

export default LogInPage;
