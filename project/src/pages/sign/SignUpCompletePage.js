import { NextBtn } from "../../components/etc/buttonComponents";

//TODO 세션에 유저 정보 저장하기
export function SignUpCompletePage() {
  return (
    <>
      <div className="sign-up-complete">
        <p>회원가입이 완료되었습니다.</p>
        <NextBtn title="여기를 눌러 홈화면으로 가기" path="/" />
      </div>
    </>
  );
}

export default SignUpCompletePage;
