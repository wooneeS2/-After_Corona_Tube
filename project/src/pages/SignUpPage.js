import "../design/logIn.css";

export function SignUpPage() {
  return (
    <>
      <div className="log-in-box">
        <p id="log-in-title">회원가입</p>

        <form>
          <div id="user-id-box">
            <div id="log-in-id-title">이메일</div>

            <input type="text" name="user-id" id="user-id-input" />
          </div>
          <div id="user-pw-box">
            <div id="log-in-pw-title">아이디</div>
            <input type="text" name="user-pw" id="user-pw-input" />
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
      </div>
    </>
  );
}
export default SignUpPage;
